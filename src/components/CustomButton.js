import React from 'react'
import styled from 'styled-components'
import buttonTypeSwitch from '../utils/buttonTypeSwitch'
export default function CustomButton(props) {
  const button = buttonTypeSwitch(props.buttonType)

  return (
    <>
      <ButtonWrapper
        onClick={props.onClick}
        backgroundColor={button.backgroundColor}
        textColor={button.textColor}
        marginRight={props.marginRight}
      >
        <ButtonText> {button.buttonText}</ButtonText>
      </ButtonWrapper>
    </>
  )
}

const ButtonWrapper = styled.div.attrs(() => ({
  className: 'p-2 text-center w-100 mt-2',
}))`
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  border-radius: 3px;
  color: ${(props) => props.textColor};
  margin-right: ${(props) => props.marginRight && '1rem'};
`
const ButtonText = styled.h6.attrs(() => ({
  className: 'm-0 p-0',
}))``
