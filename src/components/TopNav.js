import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledWrapper = styled.nav`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    width: 100%;
    list-style-type: none;
    font-weight: ${({ theme }) => theme.fontWeight.basic};

    li {
      margin: 5px 25px;
      transition: 0.2s;
    }
    li:hover {
      color: ${({ theme }) => theme.color.primary};
      text-decoration: underline;
    }
  }
  @media (max-width: 640px) {
    margin-top: 35vh;
    ul {
      li {
        padding: 0;
        margin: 10px 0;
        flex-basis: 50%;
      }
    }
  }
`

const activeStyles = {
  color: "#4D1FAB",
  textDecoration: "underline",
}

const TopNav = () => (
  <StyledWrapper>
    <ul>
      <li>
        <Link activeStyle={activeStyles} to="/fizjoterapia">
          Fizjoterapia
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/psycholog">
          Psycholog
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/logopeda">
          Logopeda
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/terapia-sensoryczna">
          Terapia integracji sensorycznej
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/terapia-pedagogiczna">
          Terapia pedagogiczna
        </Link>
      </li>
    </ul>
  </StyledWrapper>
)

export default TopNav
