 import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

import HeaderIcon from "../components/HeaderIcon"

const StyledFooter = styled.footer`
  width: 100%;
  height: 370px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 130px;
  background-color: ${({ theme }) => theme.color.tertiary};
  p {
    color: white;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  a {
    font-size: 9px;
    align-self: flex-end;
  }

  .phone {
    text-transform: capitalize;
  }
  .address {
    margin-right: 10%;
  }

  @media (max-width: 640px) {
    padding: 25px;
    flex-direction: column;
    height: auto;

    .address {
      margin-right: 0;
    }
    a {
      order: 3;
      align-self: center;
    }
    div {
      margin: 15px 0;
    }
  }
`

const Footer = () => {
  const data = useStaticQuery(query)
  const {
    allFile: { nodes },
  } = data

  const iconHouse = nodes[2].publicURL
  const iconPhone = nodes[3].publicURL

  const phones = data.allDatoCmsProfileOsobowe.nodes.map(person => (
    <p>
      {person.zawD} {person.imienazwisko} {person.telefon}
    </p>
  ))

  return (
    <>
      <StyledFooter>
        <div className="phone">
          <HeaderIcon icon={iconPhone} title={"Telefon:"} />

          {phones}
        </div>

        <a href="http://www.freepik.com">Designed by Freepik</a>

        <div className="address">
          <HeaderIcon icon={iconHouse} title={"Adres:"} />
          <p>ul. Brzeska 134</p>
          <p>21-500 Biała Podlaska</p>
        </div>
      </StyledFooter>
    </>
  )
}

const query = graphql`
  {
    allFile(filter: { name: { regex: "/icon/" } }) {
      nodes {
        publicURL
      }
    }

    allDatoCmsProfileOsobowe {
      nodes {
        imienazwisko
        zawD
        telefon
      }
    }
  }
`

export default Footer
