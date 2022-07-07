export const sortByPriortiy = (data) => {
  return data?.sort((a, b) => {
    return a?.priority - b?.priority
  })
}

export const findEditModalData = (data, editModalData) => {
  return data?.find((item) => {
    return item?._id === editModalData
  })
}

export const filterDeleteModalData = (data, deleteModalData) => {
  return data?.filter((job) => {
    return job?._id !== deleteModalData
  })
}

export const searchJobByName = (data, searchKey) => {
  return data?.filter((job) => {
    return job?.jobName?.toLowerCase().search(searchKey?.toLowerCase()) !== -1
  })
}

export const filterJobByPriority = (data, priority) => {
  return data?.filter((job) => {
    return job?.priority === priority
  })
}

export const sortJobByName = (data, sortType) => {
  if (sortType === 'asc') {
    return data?.sort(function (a, b) {
      if (a?.jobName < b?.jobName) {
        return -1
      }
      if (a?.jobName > b?.jobName) {
        return 1
      }
      return 0
    })
  } else {
    return data?.sort(function (a, b) {
      if (b?.jobName < a?.jobName) {
        return -1
      }
      if (b?.jobName > a?.jobName) {
        return 1
      }
      return 0
    })
  }
}

export const sortJobByPriority = (data, sortType) => {
  if (sortType) {
    return data?.sort((a, b) => {
      return b?.priority - a?.priority
    })
  } else {
    return data?.sort((a, b) => {
      return a?.priority - b?.priority
    })
  }
}

export const newJobObject = (_id, jobName, priority) => {
  return {
    _id,
    jobName,
    priority,
  }
}
