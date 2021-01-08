import React, { useContext } from "react"
import { v4 as uuidv4 } from "uuid"

import { MainContext } from "@providers"
import { abilitiesData, abilitiesTechData, languageData } from "@static/data"
import {
  AvatarImage,
  SeparatorLine,
  Contact,
  Ability,
  TitleSection,
} from "@components"

export const Sidebar = () => {
  const { colors } = useContext(MainContext) || {
    colors: { gray: { 500: "#a0aec0" } },
  }

  return (
    <>
      {/* 
      |-----------------------------------------------
      |  IMAGEN
      |-----------------------------------------------
      */}
      <AvatarImage />

      {/* 
      |-----------------------------------------------
      |  CONTACTO
      |-----------------------------------------------
      */}
      <TitleSection color={colors.gray[500]} size="1.1em" weight="500">
        CONTACTO
      </TitleSection>
      <SeparatorLine />
      <Contact
        phone="618377176"
        email="alejandrollorente.dev@gmail.com"
        linkedin="https://www.linkedin.com/in/alejandro-llorente-cardenache-b7ba40197/"
      />

      {/* 
      |-----------------------------------------------
      |  HABILIDADES
      |-----------------------------------------------
      */}
      <TitleSection color={colors.gray[500]} size="1.1em" weight="500">
        HABILIDADES
      </TitleSection>
      <SeparatorLine />
      {abilitiesData &&
        abilitiesData.map(item => (
          <Ability key={uuidv4()} name={item.name} puntos={item.puntos} />
        ))}

      {/* 
      |-----------------------------------------------
      |  TECNOLOGÍAS
      |-----------------------------------------------
      */}
      <TitleSection color={colors.gray[500]} size="1.1em" weight="500">
        TECNOLOGÍAS
      </TitleSection>
      <SeparatorLine />
      {abilitiesTechData &&
        abilitiesTechData.map(item => (
          <Ability key={uuidv4()} name={item.name} puntos={item.puntos} />
        ))}

      {/* 
      |-----------------------------------------------
      |  LENGUAJE
      |-----------------------------------------------
      */}
      <TitleSection color={colors.gray[500]} size="1.1em" weight="500">
        LENGUAJE
      </TitleSection>
      <SeparatorLine />
      {languageData &&
        languageData.map(item => (
          <Ability key={uuidv4()} name={item.name} puntos={item.puntos} />
        ))}
    </>
  )
}
