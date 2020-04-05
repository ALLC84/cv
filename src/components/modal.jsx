import React from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`
  position: absolute;
  z-index: 999999;
  max-width: 250px;

  @media (min-width: 768px) {
    transform: translate(100%, -16px);
  }
`

export const Modal = ({url, alt}) => {
  return (
    <StyledModal>
      <img src={url} alt={alt}/>
    </StyledModal>
  )
} 
