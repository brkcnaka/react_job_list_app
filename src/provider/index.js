import React, { createContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import Footer from 'components/Footer'
import Header from 'components/Header'
import PriorityServices from 'services/PriorityServices'
import { getStorage, setStorage } from 'helpers/StorageHelper'
import {
  filterDeleteModalData,
  filterJobByPriority,
  findEditModalData,
  newJobObject,
  searchJobByName,
  sortByPriortiy,
  sortJobByName,
  sortJobByPriority,
} from 'utils/dataUtils'

export const AppContext = createContext()

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
    const jobList = (await getStorage('jobs')) || []
    const sortedJobList = await sortByPriortiy(jobList)
    setJobList(sortedJobList)
    return sortedJobList
  }

  async function createJob() {
    if (!jobName?.trim() || !addNewPriority) {
      alert('Job name and priority are required!')
      return
    }
    const currentStorage = getStorage('jobs') || []
    const data = newJobObject(
      currentStorage?.length + 1,
      jobName?.trim(),
      Number(addNewPriority)
    )
    setStorage('jobs', [...currentStorage, data])
    const newJobList = [...jobList, data]
    const sortedJobList = await sortByPriortiy(newJobList)
    setJobList(sortedJobList)
    setJobName('')
    setAddNewPriority('')
    filter()
  }

  async function updateJob() {
    const currentData = await getStorageJobList()
    const foundedData = await findEditModalData(currentData, editModalData?._id)
    foundedData.priority = editModalData?.priority
    setStorage('jobs', currentData)
    filter()
    handleUpdateModal()
  }

  function deleteJob() {
    const newData = filterDeleteModalData(filterableData, deleteModalData?._id)
    setStorage('jobs', newData)
    filter()
    handleDeleteModal()
  }

  async function filterSearch() {
    const data = await getStorageJobList()
    return searchKey ? await searchJobByName(data, searchKey) : data
  }

  async function filterPriority(data) {
    return filterToPriority
      ? await filterJobByPriority(data, filterToPriority)
      : data
  }

  async function sortName(data) {
    if (!sortNameType) {
      return data
    }
    return await sortJobByName(data, sortNameType)
  }

  async function sortPriorty(data) {
    if (sortNameType) return data
    return await sortJobByPriority(data, sortPriorityType)
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
      const priorityData = await PriorityServices.fetchPriorityLabel()
      setPriorityData(priorityData)
      setStatus(2)
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
        <Wrapper>{props?.children}</Wrapper>
        <Footer />
      </AppContext.Provider>
    </>
  )
}

const Wrapper = styled.div`
  padding: 70px 0 60px 0;
`
