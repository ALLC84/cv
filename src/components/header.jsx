import React from "react"
import styled from "styled-components"
import GithubIcon from "@images/github.svg"
import DownloadButton from "@images/download-button.svg"
import cvPDF from "@static/pdf/cv-alejandro-llorente.pdf"

const StyleHeader = styled.div`
  width: -webkit-fill-available;
  max-width: inherit;
  z-index: 999999;
`
const Actions = styled.div``

export const Header = () => (
  <StyleHeader className="bg-white h-8 fixed">
    <Actions className="flex justify-end items-center p-2">
      <a
        className="text-gray-600 ml-3"
        target="_blanck"
        href="https://github.com/ALLC84/cv"
      >
        <img className="w-5" src={GithubIcon} alt="icon github.svg" />
      </a>
      <a className="text-gray-600 ml-3" href={`${cvPDF}`} download>
        <img className="w-5" src={DownloadButton} alt="icon download" />
      </a>
    </Actions>
  </StyleHeader>
)
