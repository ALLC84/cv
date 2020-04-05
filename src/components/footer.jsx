import React from "react"
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'

import { tecnologiesData } from '@static/data'

const Left = styled.div``
const Right = styled.div``

const usedTechnologies = (tecnologies) => {
  return (
    <>
      <span className='text-gray-600'>Creado utilizando, </span>
      {tecnologies.map(item => (
        <a key={uuidv4()} className='text-gray-600 ml-2' target='_blanck' href={item.url}>
          <img className={item.class} src={item.src} alt={item.alt}/>
        </a>
      ))}
    </>
  )
}

export const Footer = () => (
  <footer className='py-2 flex flex-col items-center xs:flex-row justify-between'>
    <Left>
      <span className='text-gray-600'>
        © {new Date().getFullYear()},
      </span>
      <span className='text-gray-600 ml-1'>
        Alejandro Llorente
      </span>
    </Left>
    <Right className='flex items-center'>
      {usedTechnologies(tecnologiesData)}
    </Right>
  </footer>
)
