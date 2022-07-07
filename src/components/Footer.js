import React from 'react'
import styled from 'styled-components'

import { GitSVG } from 'assets/icons'

export default function Footer() {
  return (
    <Container>
      <GitWrapper>
        <GitIcon width={25} src={GitSVG} />
        <Copyright
          textDecoration={'underline'}
          onClick={() =>
            window.open('https://github.com/brkcnaka/react_job_list_app.git')
          }
        >
          repository
        </Copyright>
      </GitWrapper>
      <Copyright
        onClick={() => window.open('https://www.linkedin.com/in/brkcnaka/')}
      >
        © 2022 Berk Can Aka
      </Copyright>
    </Container>
  )
}

const Container = styled.div.attrs(() => ({
  className:
    'container-fluid  d-flex align-items-center justify-content-between',
}))`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f5f5f5;
  height: 60px;
`

const GitWrapper = styled.div.attrs(() => ({
  className: 'd-flex align-items-center',
}))`
  font-size: 13px;
  cursor: pointer;
`

const GitIcon = styled.img.attrs(() => ({
  className: 'me-2',
}))``

const Copyright = styled.p`
  margin: 0;
  font-size: 13px;
  color: #838383;
  text-decoration: ${(props) => props?.textDecoration || 'none'};
  cursor: pointer;
`
