import React from 'react'
import styled from 'styled-components'
import { SearchSVG } from '../assets/icons'
export default function TextInput(props) {
  return (
    <>
      <Wrapper>
        {props.label && <Label>{props.label}</Label>}
        <Input
          onChange={(e) =>
            props.onChange(
              e.target.value.replace(/[^A-Za-z0-9 ğüşöçıİĞÜŞÖÇ]/g, '')
            )
          }
          value={props.value}
          type="text"
          maxLength={255}
          placeholder={props.placeHolder || ''}
          padding={props.searchIcon && '0 10px 0 35px'}
          disabled={props.disabled || false}
        />
        {props.searchIcon && (
          <SearchIconWrapper>
            <img alt="" width={25} src={SearchSVG} />
          </SearchIconWrapper>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  position: relative;
`
const Label = styled.p.attrs(() => ({
  className: 'mb-1',
}))`
  color: #898a8a;
`

const Input = styled.input.attrs(() => ({
  className: 'mb-2',
}))`
  width: 100%;
  height: 40px;
  border-color: #edeced;
  border-style: solid;
  border-radius: 3px;
  border-width: 1px;
  padding: ${(props) => props.padding || '0 10px'};
  outline: none;
`

const SearchIconWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))`
  height: 40px;
  width: 40px;
  position: absolute;
  top: 0;
`
