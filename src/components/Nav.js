import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledWrapper = styled.nav`
  text-transform: uppercase;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  transition: ease-in-out 0.5s;
  overflow-x: hidden;

  ul {
    display: flex;

    list-style-type: none;
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.basic};

    li {
      margin: 10px 35px;
    }
    a {
      transition: 0.3s;
    }
    a:hover {
      color: ${({ theme }) => theme.color.secondary};
    }
  }

  @media (max-width: 640px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    background-color: ${({ theme }) => theme.color.primary};
    transform: translateX(100vh);

    ul {
      display: flex;

      flex-direction: column;
      justify-content: center;
    }
  }
`
const activeStyles = {
  color: "#EDBA5F",
}

const Nav = () => (
  <StyledWrapper>
    <ul>
      <li>
        <Link activeStyle={activeStyles} to="/o-nas">
          O nas
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/kontakt">
          Kontakt
        </Link>
      </li>
    </ul>
  </StyledWrapper>
)

export default Nav
