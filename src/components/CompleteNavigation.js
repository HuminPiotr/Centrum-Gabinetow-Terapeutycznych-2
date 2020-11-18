import React from "react"
import styled from "styled-components"

import TopNav from "./TopNav"
import MainHeader from "./MainHeader"

const StyledWrapper = styled.div`
  width: 100%;
  z-index: 5;



  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    height: 200px;

    div {
      width: 100%;
      order: -1;
      margin-bottom: 15px;
    }
  }
`

const CompleteNavigation = () => (
  <StyledWrapper>
    <MainHeader></MainHeader>
  </StyledWrapper>
)

export default CompleteNavigation
