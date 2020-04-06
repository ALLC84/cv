import React from 'react'
import styled from "styled-components"
import { v4 as uuidv4 } from 'uuid'
import PropTypes from "prop-types"

const AbilityContainer = styled.div`

`
const AbilityContent = (name, puntos = 0) => {

  let fin = null;
  
  if (puntos !== 0) {
    fin = 5 - puntos
  }

  return(
    <>
      <p className='text-gray-300 text-sm lg:text-base'>{name}</p>
      <div>
        {[...Array(puntos)].map(item => {
            return (
              <span key={uuidv4()} className='material-icons text-gray-500'>fiber_manual_record</span>
            )
          })}

        {fin === null || [...Array(fin)].map(item => {
            return (
              <span key={uuidv4()} className='material-icons text-gray-700'>fiber_manual_record</span>
            )
          })}
      </div>
    </>
  )
}

export const Ability = ({name, puntos}) => {

	return (
		<AbilityContainer className='flex justify-between'>
			{AbilityContent(name, puntos)}
		</AbilityContainer>
	)

}

Ability.propTypes = {
  name: PropTypes.string.isRequired,
  puntos: PropTypes.number
}

Ability.defaultProps = {
  puntos: 0
}