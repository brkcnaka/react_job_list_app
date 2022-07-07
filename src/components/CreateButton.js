import React, { useContext } from 'react'
import styled from 'styled-components'

import { AppContext } from 'provider'

export default function CreateButton() {
  const { createJob } = useContext(AppContext)

  return (
    <>
      <Button onClick={() => createJob()}>
        <Title>Create</Title>
      </Button>
    </>
  )
}

const Button = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-center mb-2',
}))`
  background-color: #0079e8;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`
const Title = styled.h6.attrs(() => ({
  className: ' m-0',
}))``
