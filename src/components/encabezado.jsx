import React, {useContext} from 'react'
import styled from "styled-components"
import { MainContext } from '@providers'
import { useSiteMetadata } from "@hooks"
import { SeparatorLine, Section } from "@components"

export const Name= styled.h1`
  font-size: 2.2em;
  font-weight: 600;
  color: ${props => (props.color ? props.color :"#4a5568")};
  margin-top: ${props => (props.top ? props.top : '30px')};

  @media (min-width: 768px) {
    font-size: 3.2em;
    font-weight: 900;
  }
`

export const Encabezado = () => {
	const {colors} = useContext(MainContext) || { colors: {blue: {600: '#3182ce'}}}
	const siteMetadata = useSiteMetadata()

	return (
		<>
			<Name 
				className="text-gray-800" top="0"
			>
				{siteMetadata.name}
			</Name>
			<SeparatorLine bg={colors.blue[600]} height='2px'/>
			<Section 
				content={[
					{
						title: siteMetadata.title,
						content: siteMetadata.description
					}
				]}
			/>
		</>
	)

}