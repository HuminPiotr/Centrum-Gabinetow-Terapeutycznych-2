import React from "react"
import styled from "styled-components"

import Map from "../components/Map"
import SEO from "../components/seo"

const StyledWrapper = styled.div`
  margin: 25px 130px 80px;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    font-size: ${({ theme }) => theme.fontSize.big};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
  }
  header {
    display: flex;
    align-items: flex-end;
    margin: 15px 0;
  }
  h2 {
    clear: both;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.big};
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    margin: 25px 0;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize.basic};
    margin: 0;
    margin-left: 10px;
  }
  p {
  }
  .phones {
    float: right;
    text-align: right;
    margin-bottom: 25px;

    header {
      justify-content: flex-end;
    }
  }

  @media (max-width: 640px) {
    margin: 15px;
  }
`

const KontaktPage = ({ data }) => {
  const phones = data.allDatoCmsProfileOsobowe.nodes.map(person => (
    <p>
      {person.zawD} {person.imienazwisko} {person.telefon}
    </p>
  ))
  return (
    <>
    <SEO title="Kontakt" />
      <StyledWrapper>
        <h1>Kontakt</h1>

        <div className="address">
          <header>
            <img src="/icon-house2.jpg" alt="houseIcon" /> <h3>Adres:</h3>
          </header>
          <p>ul. Brzeska 134</p>
          <p>21-500 Biała Podlaska</p>
        </div>

        <div className="phones">
          <header>
            <img src="/icon-phone2.jpg" alt="phoneIcon" /> <h3>Telefon:</h3>
          </header>
          {phones}
        </div>

        <h2>Mapa</h2>
        <Map />
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  {
    allDatoCmsProfileOsobowe {
      nodes {
        imienazwisko
        zawD
        telefon
      }
    }
  }
`

export default KontaktPage
