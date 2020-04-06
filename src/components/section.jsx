import React, {useState, useContext} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { v4 as uuidv4 } from 'uuid'

import { SectionDescription } from "@components"
import {MainContext} from '@providers'



const SectionContainer = styled.div``

const ButtonShowMore = styled.div`
  color: ${props => props.color ? props.color : '#1a202c'};

  &:hover {
    cursor: pointer;
    color: ${props => props.hover ? props.hover : '#1a202c'};
  }
`

export const Section = ({ content, withButton = false }) => {
  const {colors} = useContext(MainContext) || { colors: {blue: {600: '#4299e1', 400: '#90cdf4'}}}
  const [showAll, setShowAll] = useState(false)

  const handleShow = () => {
    setShowAll(!showAll)
  }

  return (
    <SectionContainer>
      {content && content.map((item, index )=> {
        if(!showAll && index >= 2) return null
        return (
          <SectionDescription
            key={uuidv4()}
            title={item.title}
            subtitle={item.subtitle}
            year={item.year}
            content={item.content}
            url={item.url}
            imageTitulo={item.imageTitulo}
          />
        )
      })}

      {withButton && <ButtonShowMore 
        onClick={handleShow}
        color={colors.blue[600]}
        hover={colors.blue[300]}
      >
        {!showAll ? 'Mostrar más' : 'Mostrar menos'}
      </ButtonShowMore>}
    </SectionContainer>
  )
}

Section.propTypes = {
  withButton: PropTypes.bool,
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
}

Section.defaultProps = {
  withButton: false,
}


