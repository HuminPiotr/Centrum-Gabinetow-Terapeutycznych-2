import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

// import SEO from "../components/seo"
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
    display: flex;

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
      <StyledWrapper>
        <h1>Gabinet terapii pedagogicznej</h1>
        <div className="content">
          <div className="content__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            impedit voluptatem minus provident esse molestiae earum molestias,
            distinctio sint, nihil eveniet, doloribus aut assumenda
            reprehenderit sit doloremque deleniti dignissimos corporis.
          </div>

          <div className="content__logo">
            {/* <Image fixed={data.logo.nodes[0].fixed} /> */}
          </div>
        </div>

        <div className="person">
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
          <div>
            <h2>Cennik:</h2>
            <p>Spotkanie do 60min - 100zł</p>
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
