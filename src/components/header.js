import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "./Logo"
import Nav from "./Nav"
import Hamburger from "./Hamburger"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  min-height: 300px;
  z-index: 4;

  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: center;
  padding: 1.8vw 130px 0 130px;

  @media (max-width: 1200px) {
    background-size: cover;
    padding: 1.8vw 25px 0 25px;
  }
  @media (max-width: 640px) {
    min-height: 30vh;
    background-size: cover;
    position: fixed;

    top: 0;
    left: 0;
  }
  nav {
    /* display: none; */
  }
  .menu-btn.active + nav {
    transform: translateX(0px);
  }
`

const Header = () => {
  const data = useStaticQuery(query)

  return (
    <StyledWrapper className="header" background={data.file.publicURL}>
      <Logo />
      <Hamburger />
      <Nav />
    </StyledWrapper>
  )
}

const query = graphql`
  {
    file(name: { eq: "header" }) {
      publicURL
    }
  }
`

export default Header
