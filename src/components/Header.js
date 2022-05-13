import React from 'react'
import styled from 'styled-components'
import Logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <ContainerFluid>
      <Container>
        <HeaderLogo />
        <HeaderLogoText>
          LOREM<span>IPSUM</span>
        </HeaderLogoText>
      </Container>
    </ContainerFluid>
  )
}
const ContainerFluid = styled.div.attrs(() => ({
  className: 'container-fluid border-bottom',
}))`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
`
const Container = styled.div.attrs(() => ({
  className: 'container d-flex align-items-center',
}))`
  height: 70px;
`

const HeaderLogo = styled.img.attrs(() => ({
  width: '70',
  src: Logo,
}))`
@media (max-width: 768px){
    display: none;
  } 
,`
const HeaderLogoText = styled.p.attrs(() => ({
  className: 'm-0 fw-bold fs-4 ms-2',
}))`
  color: #1b6698;
  span {
    font-weight: normal;
    color: #f5963c;
  }
  @media (max-width: 768px) {
    margin-left: 0 !important;
  }
`
