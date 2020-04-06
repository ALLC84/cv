import React, {useState} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {Modal} from '@components'

const Container = styled.div``
const Description = styled.div`
  @media (min-width: 40em) {
    display: flex;
    justify-content: space-between;
  }
`
const Left = styled.div``
const Right = styled.div``
const Body = styled.div``

export const SectionDescription = props => {
  const { title, subtitle, year, content, url, imageTitulo } = props
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  const Title = title => ( 
    <p className='text-gray-800 font-semibold'>
      {title}
    </p> 
  );

  const TitleWorkExperience = args => ( 
    <a href={args.url} target='__blanck' className='underline'>
      <span className='text-gray-800 font-semibold'>
        {args.title}
      </span> 
    </a> 
  );

  const TitleCourses = args => (
    <> 
      <div 
        role="button" 
        tabIndex={0} 
        onClick={handleShowModal} 
        onKeyDown={handleShowModal} 
        className='text-gray-800 font-semibold cursor-pointer underline outline-none'
      >
        {args.title}
      </div>
      {/* IF SHOWMODAL */}
      {showModal && <Modal url={args.imageTitulo} alt={args.title} />}
    </>
  );

  return (
    <Container className="mb-4">
      <Description>
        <Left>
          {/* TITLE */}
          { url ? 
              TitleWorkExperience({url, title}) 
            : imageTitulo ? 
                TitleCourses({imageTitulo, title})
            : Title(title)
          }
          
          {/* IF SUBTITLE */}
          {subtitle && ( <p className='italic text-sm'>{subtitle}</p> )}
        </Left>

        {/* IF YEAR */}
        { year && ( <Right className='font-medium'> <p>{year}</p> </Right> )}
      </Description>

      {/* IF CONTENT */}
      { content && ( <Body className="mt-1"> <p>{content}</p> </Body> )}
    </Container>
  )
}

SectionDescription.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  year: PropTypes.string,
  content: PropTypes.string,
  imageTitulo: PropTypes.string
}

SectionDescription.defaultProps = {
  subtitle: null,
  year: null,
  content: null,
  imageTitulo: null
}


