import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {Header, Sidebar, Footer} from "@components"

const RootContainer = styled.div``
const MainContainer = styled.div``
const LeftArea = styled.section``
const RightArea = styled.section``
const MainContent = styled.main``

export const Layout = ({ children }) => {
  return (
    <RootContainer className='max-w-4xl mx-auto relative md:mb-10'>
      <Header/>
      <MainContainer className='grid grid-cols-1 md:grid-cols-12'>
        <LeftArea style={{background: '#1C3441'}} className='p-5 mt-10 md:col-span-4 md:rounded-l-lg'>
          <Sidebar />
        </LeftArea>
        <RightArea className='bg-bone p-6 md:col-span-8 md:mt-10  md:rounded-r-lg '>
          <MainContent>{children}</MainContent>
          <Footer />
        </RightArea>
      </MainContainer>
    </RootContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

