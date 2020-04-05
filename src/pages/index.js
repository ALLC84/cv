import React, {useContext} from "react"

import { MainContext } from '@providers'
import { experienciaData, educacionData, cursosData } from '@static/data'
import { Layout, SEO, Encabezado, TitleSection, SeparatorLine, Section } from "@components"

const IndexPage = () => {
  const {colors} = useContext(MainContext) || { colors: {blue: {600: '#3182ce'}}}

  return (
    <Layout>
      <SEO title="CV" />
      {/* 
      |-----------------------------------------------
      |  NOMBRE Y DESCRIPCIÓN
      |-----------------------------------------------
      */}
      <Encabezado/>
      <SeparatorLine  width='100%'/>

      {/* 
      |-----------------------------------------------
      |  EXPERIENCIA LABORAL 
      |-----------------------------------------------
      */}
      <TitleSection
        className="text-gray-800"
        top="30px"
        size="1.6em"
        weight="900"
      >
        EXPERIENCIA LABORAL
      </TitleSection>
      <SeparatorLine bg={colors.blue[600]} height='2px'/>
      <Section
        withButton={true}
        content={experienciaData}
      />
      <SeparatorLine  width='100%'/>

      {/* 
      |-----------------------------------------------
      |  EDUCACION 
      |-----------------------------------------------
      */}
      <TitleSection
        className="text-gray-800"
        top="30px"
        size="1.6em"
        weight="900"
      >
        EDUCACIÓN
      </TitleSection>
      <SeparatorLine bg={colors.blue[600]} height='2px'/>
      <Section
        content={educacionData}
      />
      <SeparatorLine  width='100%'/>

      {/* 
      |-----------------------------------------------
      |  CURSOS 
      |-----------------------------------------------
      */}
      <TitleSection
        className="text-gray-800"
        top="30px"
        size="1.6em"
        weight="900"
      >
        CURSOS
      </TitleSection>
      <SeparatorLine bg={colors.blue[600]} height='2px'/>
      <Section
        withButton={true}
        content={cursosData}
      />
    <SeparatorLine  width='100%'/>
    </Layout>
  )
}

export default IndexPage
