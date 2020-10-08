import React from "react"
import styled from "styled-components"

import TopNav from "./TopNav"
import Header from "./Header"

const StyledWrapper = styled.div`
  width: 100%;
  z-index: 5;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      order: -1;
      margin-bottom: 15px;
    }
  }
`

const CompleteNavigation = () => (
  <StyledWrapper>
    <TopNav></TopNav>
    <Header></Header>
  </StyledWrapper>
)

export default CompleteNavigation
