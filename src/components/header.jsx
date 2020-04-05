import React from "react"
import styled from "styled-components"
import GithubIcon from '@images/github.svg'

const StyleHeader = styled.div`
  width: -webkit-fill-available;
  max-width: inherit;
  z-index: 999999;
`
const Actions = styled.div``

export const Header = () => (
  <StyleHeader
    className="bg-white h-8 fixed"
  >
    <Actions className='flex justify-end items-center p-2'>
      <a className='text-gray-600 ml-2' target='_blanck' href="https://github.com/ALLC84/cv">
        <img className='w-5' src={GithubIcon} alt="icon github.svg"/>
      </a>
    </Actions>
  </StyleHeader>
)
