import React, {useContext} from "react"
import { AvatarImage, SeparatorLine, Contact, Ability, TitleSection } from "@components"
import { MainContext } from '@providers'
import { useImageAvatar } from "@hooks"


export const Sidebar = () => {
  const image = useImageAvatar()
  const {colors} = useContext(MainContext) || { colors: {gray: {500: '#a0aec0'}}}
  
  return (
    <>
      {/* 
      |-----------------------------------------------
      |  IMAGEN
      |-----------------------------------------------
      */}
      <figure>
        <AvatarImage
          src={image.fluid.src}
          alt="Foto Perfil Alejandro Llorente"
        />
      </figure>

      {/* 
      |-----------------------------------------------
      |  CONTACTO
      |-----------------------------------------------
      */}
      <TitleSection
        color={colors.gray[500]}
        size="1.1em"
        weight="500"
      >
        CONTACTO
      </TitleSection>
      <SeparatorLine />
      <Contact 
        phone='618377176' 
        email='alejandrollorente.dev@gmail.com' 
      />

      {/* 
      |-----------------------------------------------
      |  HABILIDADES
      |-----------------------------------------------
      */}
      <TitleSection
        color={colors.gray[500]}
        size="1.1em"
        weight="500"
      >
        HABILIDADES
      </TitleSection>
      <SeparatorLine />
      {/* HTML */}
      <Ability name='HTML' puntos={4} />
      {/* CSS */}
      <Ability name='CSS' puntos={4} />
      {/* SCSS */}
      <Ability name='SCSS' puntos={3} />
      {/* JAVASCRIPT */}
      <Ability name='JAVASCRIPT' puntos={4} />
      {/* TYPESCRIPT */}
      <Ability name='TYPESCRIPT' puntos={3} />

      {/* 
      |-----------------------------------------------
      |  TECNOLOGÍAS
      |-----------------------------------------------
      */}
      <TitleSection
        color={colors.gray[500]}
        size="1.1em"
        weight="500"
      >
        TECNOLOGÍAS
      </TitleSection>
      <SeparatorLine />
      {/* REACT */}
      <Ability name='REACT' puntos={4} />
      {/* REACT NATIVE*/}
      <Ability name='REACT NATIVE' puntos={3} />
      {/* REACT - REDUX */}
      <Ability name='REACT - REDUX' puntos={4} />
      {/* FIREBASE */}
      <Ability name='FIREBASE' puntos={3} />
      {/* GIT - GITHUB */}
      <Ability name='GIT - GITHUB' puntos={3} />


      {/* 
      |-----------------------------------------------
      |  LENGUAJE
      |-----------------------------------------------
      */}
      <TitleSection
        color={colors.gray[500]}
        size="1.1em"
        weight="500"
      >
        LENGUAJE
      </TitleSection>
      <SeparatorLine />
      <Ability name='Español'/>
      <Ability name='Ingles' puntos={1}/>
    </>
  )
}

