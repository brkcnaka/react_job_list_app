import React, { useContext } from 'react'
import styled from 'styled-components'
import { AppContext } from '../provider'
export default function SectionTitle(props) {
  const { jobList, filterableData } = useContext(AppContext)
  if (props.title === 'Job List') {
    return (
      <Wrapper>
        <Title>{props.title}</Title>
        <Count>
          ({filterableData?.length}/{jobList?.length})
        </Count>
      </Wrapper>
    )
  }
  return <Title>{props.title}</Title>
}
const Wrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center justify-content-between',
}))``

const Title = styled.h4.attrs(() => ({
  className: 'fw-bold mt-5 mb-3',
}))`
  color: #414141;
`
const Count = styled.h6.attrs(() => ({
  className: 'fw-normal mt-5 mb-3',
}))`
  color: #414141;
`
