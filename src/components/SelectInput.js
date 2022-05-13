import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../provider'
import fetchDataStatusSwitch from '../utils/fetchDataStatusSwitch'

export default function SelectInput(props) {
  const { addNewPriority, filterPriority, status } = useContext(AppContext)
  return (
    <>
      {props.label && <Label>{props.label}</Label>}
      <Select
        //value={props.defaultValue || undefined}
        //value={props.filter ? filterPriority : addNewPriority}
        value={
          props.filter
            ? filterPriority
            : props.showPlaceHolder
            ? addNewPriority
            : props.defaultValue
        }
        onChange={(e) => props.onChange(Number(e.target.value))}
      >
        {props.showPlaceHolder && (
          <option value="">{fetchDataStatusSwitch(status)}</option>
        )}

        {props.options?.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </Select>
    </>
  )
}

const Label = styled.p.attrs(() => ({
  className: 'mb-1',
}))`
  color: #898a8a;
`

const Select = styled.select.attrs(() => ({
  className: 'mb-2',
}))`
  width: 100%;
  height: 40px;
  border-color: #edeced;
  border-style: solid;
  border-radius: 3px;
  border-width: 1px;
  padding: 0 10px;
  color: #898a8a;
  outline: none;
  appearance: none;
`
