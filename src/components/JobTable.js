import React, { useContext } from 'react'

import styled from 'styled-components'
import { AppContext } from '../provider'
import ActionButton from './ActionButton'
import prioritySwitch from '../utils/prioritySwitch'

export default function JobTable() {
  const {
    filterableData,
    searchKey,
    sortNameType,
    setSortNameType,
    sortPriorityType,
    setSortPriorityType,
    handleUpdateModal,
    handleDeleteModal,
  } = useContext(AppContext)

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <tr
              style={{
                color: '#898a8a',
                fontSize: 14,
              }}
            >
              <th
                width="60%"
                style={{ cursor: 'pointer' }}
                onClick={() =>
                  setSortNameType(sortNameType === 'asc' ? 'desc' : 'asc')
                }
              >
                Name
              </th>
              <th
                width="30%"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSortNameType(null)
                  setSortPriorityType(!sortPriorityType)
                }}
              >
                Priority
              </th>
              <th>Action</th>
            </tr>
          </TableHead>

          <tbody style={{ textAlign: 'start' }}>
            {filterableData?.map((job, index) => {
              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? '' : '#F9F9F9',
                  }}
                >
                  <td
                    width="60%"
                    style={{
                      verticalAlign: 'middle',
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                  >
                    <p className="m-0">{job.jobName}</p>
                  </td>
                  <td
                    width="30%"
                    style={{
                      verticalAlign: 'middle',
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                  >
                    <PriorityLabelWrapper
                      color={prioritySwitch(job.priority).color}
                    >
                      <PriorityLabel>
                        {prioritySwitch(job.priority).name}
                      </PriorityLabel>
                    </PriorityLabelWrapper>
                  </td>
                  <td
                    className=""
                    style={{
                      verticalAlign: 'middle',
                      paddingTop: 20,
                      paddingBottom: 20,
                    }}
                  >
                    <div className="d-flex">
                      <ActionButton
                        onClick={() => handleUpdateModal(job)}
                        edit
                      />
                      <ActionButton
                        onClick={() => handleDeleteModal(job)}
                        delete
                      />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
        {filterableData?.length <= 0 && !searchKey && (
          <EmptyData>Job List Empty</EmptyData>
        )}
        {searchKey && filterableData?.length === 0 && (
          <EmptyData>
            No results were found for <span>"{searchKey}"</span>
          </EmptyData>
        )}
      </TableContainer>
    </>
  )
}

const TableContainer = styled.div.attrs(() => ({
  className: 'table-responsive',
}))``
const Table = styled.table.attrs(() => ({
  className: 'table',
}))`
  border-width: 2px;
  border-style: solid;
  border-color: #f0f4ff;
  border-collapse: collapse;
`
const TableHead = styled.thead.attrs(() => ({}))`
  border-style: hidden;
  text-align: start;
  background-color: #e3e9ff;
`

const EmptyData = styled.h5.attrs(() => ({
  className: 'w-100 text-center mt-5',
}))`
  color: #ccc;
  font-weight: normal;
  span {
    font-weight: bold;
  }
`

const PriorityLabelWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))`
  background-color: ${(props) => props.color};
  width: 100px;
  padding: 7px 0;
  border-radius: 3px;
`
const PriorityLabel = styled.h6.attrs(() => ({
  className: 'fw-bold m-0',
}))`
  color: #fff;
`
