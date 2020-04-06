import React from 'react'
import Img from 'gatsby-image'
import styled from "styled-components"

import { useImageAvatar } from "@hooks"

const ImageContainer = styled.div`
  border: 2px solid #C4C4C4;
  border-radius: 100%;
  vertical-align: middle;
  width: 200px;
  height: 200px;
  margin: 15px auto 0 auto;
  overflow: hidden;
`

export const AvatarImage = () => {
  const image = useImageAvatar();

  return (
    <ImageContainer>
      <Img fluid={image.fluid} alt='Foto Alejandro Llorente'/>
    </ImageContainer>
  )

}

