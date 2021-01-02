import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import SEO from "../components/seo"
import PersonBall from "../components/PersonBall"
import HeaderIcon from "../components/HeaderIcon"

const StyledWrapper = styled.div`
  margin: 25px 130px 80px;
  position: relative;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    font-size: ${({ theme }) => theme.fontSize.big};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 50px;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize.basic};
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
  }

  ul {
    margin-left: 50px;
    margin-bottom: 50px;
  }
  .content {
    /* display: flex; */

    &__logo {
      position: absolute;
      right: 0;
    }
  }
  .person {
    display: flex;
    align-items: center;
    margin: 50px 0;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.big};
    }

    &__text {
      width: 70%;
      margin-left: 25px;
    }
  }
  .info {
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-bottom: 50px;
    h2 {
      margin-bottom: 25px;
    }
    h3 {
      color: black;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.basic};
    }
  }
  .headerIcon{
    display: flex;
    justify-content: center;
    margin: auto;
      h3{
        color: black;
        font-size: ${({ theme }) => theme.fontSize.big};
        font-weight: ${({theme}) => theme.fontWeight.bold}
      }
    }
  @media (max-width: 640px) {
    margin: 25px;

    .content {
      &__logo {
        display: none;
      }
    }
    .person {
      flex-direction: column;
      text-align: center;

      &__text {
        margin: 0;
        width: 100%;
        p {
          text-align: left;
        }
      }
    }
    .info {
      flex-direction: column;
    }
  }
`

const FizjoterapiaPage = ({ data }) => {
  return (
    <>
    <SEO title="Pedagog" />
      <StyledWrapper>
        <h1>Gabinet terapii pedagogicznej</h1>
        <div className="content">
            <h2>Terapia pedagogiczna skierowana jest do:</h2>
            <ul>
              <li>dzieci o nieharmonijnym rozwoju</li>
              <li>dzieci przedszkolnych z grup ryzyka dysleksji, czyli dzieci, które nie osiągnęły gotowości do czytania i pisania</li>
              <li>dzieci z zaburzeniami koncentracji uwagi</li>
              <li>dzieci z niepełnosprawnością intelektualną</li>
              <li>dzieci ze specyficznymi trudności w opanowaniu umiejętności:
                <br/>
                -czytanie - <strong>dysleksja</strong> <br />
                -dobrego poziomu graficznego pisma - <strong>dysgrafia</strong> 
                <br/>
                -poprawnego pisania - <strong>dysortografia</strong> 
              </li>
              <li>dzieci o obniżonej sprawności manualnej</li>
              <li>dzieci z zaburzeniami orientacji w schemacie ciała i w przestrzeni</li>
              <li>dzieci z zaburzoną koordynacją wzrokowo-słuchowo-ruchową</li>
              <li>dzieci z nadpobudliwością psychoruchową (ADHD)</li>
            </ul>
            
            <p>
            Celem  prowadzonych zajęć jest podnoszenie umiejętności szkolnych, zapobieganie deficytom, osiąganie sukcesów, podnoszenie motywacji do zdobywania wiedzy w sposób szybki i trwały. Ćwiczenia i zadania są formą treningu, który wydobywa potencjał intelektualny dziecka i rozwija go wszechstronnie.
            </p>

          <div className="content__logo">
            {/* <Image fixed={data.logo.nodes[0].fixed} /> */}
          </div>
        </div>

        <div className="person" id="person">
          <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
          <div className="person__text">
            <h2> {data.person.nodes[0].imienazwisko} </h2>
            <p>
              Nauczyciel z wieloletnim stażem, terapeuta pedagogiczny, posiada
              kwalifikacje do prowadzenia zajęć metodą choreoterapii. Prowadzi
              zajęcia korekcyjno – kompensacyjne, pracuje z dziećmi dotkniętymi
              dysleksją, dysgrafią i dysortografią.
            </p>
            <p>
              Od 15 lat pracuję w Szkole Podstawowej, wiem, jak ważna jest pomoc
              dziecku w przezwyciężaniu trudności, umożliwienie mu prawidłowego
              funkcjonowania w zespole i osiąganie sukcesów. Prowadząc zajęcia
              terapeutyczne, stosuję różnorodne metody i formy pracy,
              wykorzystuję pokrewne elementy technik stymulujących rozwój
              umiejętności szkolnych dziecka tj. elementy bajkoterapii,
              muzykoterapii i arteterapii, udzielam wsparcia w edukacji
              szkolnej, wspomagam proces uczenia się poprzez ćwiczenia
              relaksacyjne i wyciszające.
            </p>
          </div>
        </div>

        <div className="info">
          <div>
            <h2>Zadzwoń i umów się na wizytę!</h2>
            <HeaderIcon
              icon={"/icon-phone2.jpg"}
              title={data.person.nodes[0].telefon}
            />
          </div>

        </div>
      </StyledWrapper>
    </>
  )
}

export const query = graphql`
  {
    logo: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo-fizjoterapeuta/" } } }
    ) {
      nodes {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    person: allDatoCmsProfileOsobowe(
      filter: { imienazwisko: { regex: "/Komorowska/" } }
    ) {
      nodes {
        fotografia {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        imienazwisko
        zawD
        telefon
      }
    }
  }
`

export default FizjoterapiaPage
