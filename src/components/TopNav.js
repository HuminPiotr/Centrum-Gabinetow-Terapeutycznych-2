import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// import arrow from '/arrow.svg'

const StyledWrapper = styled.nav`
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  /* text-transform: uppercase; */
  font-size: ${({ theme }) => theme.fontSize.basic};
  text-align: left;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;

    width: 100%;
    list-style-type: none;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    padding-left: 15px;
    padding-right: 15px;

    li {
      margin-bottom: 1.5vw;
      padding-left: 5px;
      transition: 0.2s;
      width: 100%;
      cursor: pointer;
      transition: .5s;

      a{
        display: flex;
        align-items: center;
      }
      
    }
    li:hover {
      color: ${({ theme }) => theme.color.primary};
    }
    li:hover svg{
      transform: translateX(10px);
      path{
        fill: ${({ theme }) => theme.color.primary};
      }
    }
    
    svg{
      margin-right: 15px;
      transition: .3s;
    }
    .text{
      text-align: left;
    }

  }
  @media (max-width: 640px) {
    
    font-size: ${(props) => props.theme.fontSize.small};
    /* margin-top: 35vh; */
    /* justify-content: flex-start; */
    ul {
      flex-direction: row;
      justify-content: center;
      align-content: center;
      padding: 15px;
      margin: 0 5%;
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
          <svg width="15" height="25" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M0 30L12.5 17.5L0 5L2.5 0L20 17.5L2.5 35L0 30Z" fill="black"/>
          </svg>
          Fizjoterapia
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/logopeda">
        <svg width="15" height="25" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30L12.5 17.5L0 5L2.5 0L20 17.5L2.5 35L0 30Z" fill="black"/>
      </svg>
          Logopeda
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/terapia-sensoryczna">
        <svg width="15" height="25" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30L12.5 17.5L0 5L2.5 0L20 17.5L2.5 35L0 30Z" fill="black"/>
      </svg>
          Terapia <br/> integracji <br />sensorycznej
        </Link>
      </li>
      <li>
        <Link activeStyle={activeStyles} to="/terapia-pedagogiczna">
        <svg width="15" height="25" viewBox="0 0 20 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 30L12.5 17.5L0 5L2.5 0L20 17.5L2.5 35L0 30Z" fill="black"/>
      </svg>

            Terapia <br/> pedagogiczna
  
        </Link>
      </li>
    </ul>
  </StyledWrapper>
)

export default TopNav
