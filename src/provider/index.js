import React, { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Header from '../components/Header'

export const AppContext = createContext()

const sortPriorityLabel = [
  { value: 0, label: 'Priority (All)' },
  { value: 1, label: 'Priority (Urgent)' },
  { value: 2, label: 'Priority (Regular)' },
  { value: 3, label: 'Priority (Trivial)' },
]

export default function AppProvider(props) {
  // New Job Value
  const [jobName, setJobName] = useState('')
  const [addNewPriority, setAddNewPriority] = useState(Number)
  // Data
  const [status, setStatus] = useState(0)
  const [jobList, setJobList] = useState()
  const [filterableData, setFilterableData] = useState()
  const [priorityLabelData, setPriorityData] = useState([])
  // Filter Value
  const [searchKey, setSearchKey] = useState('')
  const [filterToPriority, setFilterToPriority] = useState(Number)
  const [sortNameType, setSortNameType] = useState(false)
  const [sortPriorityType, setSortPriorityType] = useState(false)
  // Update Modal
  const [updateModalVisible, setUpdateModalVisible] = useState(false)
  const [editModalData, setUpdateModalData] = useState()
  // Delete Modal
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [deleteModalData, setDeleteModalData] = useState()

  function handleUpdateModal(item) {
    if (!updateModalVisible) {
      setUpdateModalData(item)
    }
    setUpdateModalVisible(!updateModalVisible)
  }

  function handleDeleteModal(item) {
    if (!deleteModalVisible) {
      setDeleteModalData(item)
    }
    setDeleteModalVisible(!deleteModalVisible)
  }

  async function getStorageJobList() {
    setJobList([])
    const jobList = (await JSON.parse(localStorage.getItem('jobs'))) || []
    const sortedJobList = await jobList.sort((a, b) => {
      return a.priority - b.priority
    })
    setJobList(sortedJobList)

    return sortedJobList
  }

  async function createJob() {
    if (!jobName.trim() || !addNewPriority) {
      alert('Job name and priority are required!')
      return
    }

    const currentStorage = JSON.parse(localStorage.getItem('jobs')) || []
    let data = {
      _id: currentStorage.length + 1,
      jobName: jobName.trim(),
      priority: Number(addNewPriority),
    }
    localStorage.setItem('jobs', JSON.stringify([...currentStorage, data]))
    const newJobList = [...jobList, data]
    const sortedJobList = await newJobList.sort((a, b) => {
      return a.priority - b.priority
    })
    setJobList(sortedJobList)
    setJobName('')
    setAddNewPriority('')
    filter()
  }

  async function updateJob() {
    const currentData = await getStorageJobList()
    const foundedData = await currentData.find((item) => {
      return item._id === editModalData._id
    })
    foundedData.priority = editModalData.priority

    localStorage.setItem('jobs', JSON.stringify(currentData))
    filter()
    handleUpdateModal()
  }

  function deleteJob() {
    const newData = filterableData.filter((job) => {
      return job._id !== deleteModalData._id
    })
    localStorage.setItem('jobs', JSON.stringify(newData))
    filter()
    handleDeleteModal()
  }

  async function filterSearch() {
    let filterData
    const data = await getStorageJobList()
    if (searchKey === '') {
      filterData = data
    } else {
      filterData = await data?.filter((job) => {
        return job.jobName.toLowerCase().search(searchKey.toLowerCase()) !== -1
      })
    }

    return filterData
  }

  async function filterPriority(data) {
    let filterData
    if (!filterToPriority) {
      filterData = data
    } else {
      filterData = await data?.filter((job) => {
        return job.priority === filterToPriority
      })
    }
    return filterData
  }

  async function sortName(data) {
    let filterData
    if (!sortNameType) {
      return data
    }
    if (sortNameType === 'asc') {
      filterData = await data.sort(function (a, b) {
        if (a.jobName < b.jobName) {
          return -1
        }
        if (a.jobName > b.jobName) {
          return 1
        }
        return 0
      })
    } else {
      filterData = await data.sort(function (a, b) {
        if (b.jobName < a.jobName) {
          return -1
        }
        if (b.jobName > a.jobName) {
          return 1
        }
        return 0
      })
    }
    return filterData
  }

  async function sortPriorty(data) {
    let filterData
    if (sortNameType) return data
    if (!sortPriorityType) {
      filterData = await data.sort((a, b) => {
        return a.priority - b.priority
      })
    } else {
      filterData = await data.sort((a, b) => {
        return b.priority - a.priority
      })
    }
    return filterData
  }

  async function filter() {
    const filterSearchData = await filterSearch()
    const filterPriorityData = await filterPriority(filterSearchData)
    const sortNameData = await sortName(filterPriorityData)
    const sortPriorityData = await sortPriorty(sortNameData)
    setFilterableData(sortPriorityData)
    return sortPriorityData
  }

  async function fetchPriorityLabel() {
    try {
      setStatus(1)
      fetch('http://localhost:3001/prioritylabeldata')
        .then((response) => response.json())
        .then((data) => {
          setPriorityData(data)
          setStatus(2)
        })
    } catch (error) {
      console.log(error)
      setStatus(3)
    }
  }

  useEffect(() => {
    fetchPriorityLabel()
  }, [])
  useEffect(() => {
    filter()
  }, [searchKey, filterToPriority, sortNameType, sortPriorityType])

  return (
    <>
      <AppContext.Provider
        value={{
          // Data
          status,
          priorityLabelData,
          sortPriorityLabel,
          jobList,
          // Filter
          filterableData,
          searchKey,
          setSearchKey,
          filterToPriority,
          setFilterToPriority,
          sortNameType,
          setSortNameType,
          sortPriorityType,
          setSortPriorityType,
          // Create
          jobName,
          setJobName,
          addNewPriority,
          setAddNewPriority,
          createJob,
          // Update
          updateModalVisible,
          handleUpdateModal,
          editModalData,
          setUpdateModalData,
          updateJob,
          // Delete
          deleteModalVisible,
          handleDeleteModal,
          deleteJob,
        }}
      >
        <Header />
        <Wrapper>{props.children}</Wrapper>
        <Footer />
      </AppContext.Provider>
    </>
  )
}

const Wrapper = styled.div`
  padding: 70px 0 60px 0;
`
