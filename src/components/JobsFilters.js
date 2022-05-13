import React, { useContext } from 'react'
import { AppContext } from '../provider'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import styled from 'styled-components'

export default function JobsFilters() {
  const { searchKey, setSearchKey, setFilterToPriority, sortPriorityLabel } =
    useContext(AppContext)
  return (
    <Container>
      <InputsWrapper>
        <div className="col-md-7 mt-2">
          <TextInput
            placeHolder="Search by Name"
            searchIcon
            onChange={setSearchKey}
            value={searchKey}
          />
        </div>
        <div className="col-md-5 mt-2">
          <SelectInput
            filter
            options={sortPriorityLabel}
            onChange={setFilterToPriority}
          />
        </div>
      </InputsWrapper>
    </Container>
  )
}

const Container = styled.div.attrs(() => ({
  className: 'container',
}))``

const InputsWrapper = styled.div.attrs(() => ({
  className: 'row',
}))`
  background-color: #f0f4ff;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  padding: 10px 0px;
  border-bottom: 1px solid #fff;
`
