import React from 'react'
import styled from 'styled-components'
import { EditSVG, DeleteSVG } from '../assets/icons'

export default function ActionButton(props) {
  return (
    <>
      <ButtonWrapper onClick={props.onClick} mr={props.edit && '10px'}>
        {props.edit && <ActionIcon width={25} src={EditSVG} />}
        {props.delete && <ActionIcon width={25} src={DeleteSVG} />}
      </ButtonWrapper>
    </>
  )
}

const ActionIcon = styled.img.attrs(() => ({
  width: 15,
}))``
const ButtonWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center',
}))`
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: #e7e8e8;
  cursor: pointer;
  margin-right: ${(props) => props.mr || '0'};
`
