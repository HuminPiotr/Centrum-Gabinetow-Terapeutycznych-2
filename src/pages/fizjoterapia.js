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
    justify-content: center;

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
  }
`

const FizjoterapiaPage = ({ data }) => {
  return (
    <>
      <StyledWrapper>
        <h1>Gabinet fizjoterapii</h1>
        <div className="content">
          <div className="content__text">
            <h2>Rehabilitacja wad postawy u dzieci i dorosłych</h2>
            <ul>
              <li>skolioza,</li>
              <li>plecy okragłe, plecy wklęsłe, plecy płaskie,</li>
              <li>płaskostopie</li>
            </ul>

            <h2>Rehabilitacja neurologiczna</h2>
            <ul>
              <li>rehabilitacja po udarze mózgu,</li>
              <li>rehabilitacja uszkodzonego rdzenia kręgowego,</li>
              <li>rehabilitacja chodu i zaburzeń równowagi.</li>
            </ul>

            <h2>Masaż</h2>
            <ul>
              <li>klasyczny,</li>
              <li>relaksujący,</li>
              <li>limfatyczny</li>
            </ul>
          </div>

          <div className="content__logo">
            <Image fixed={data.logo.nodes[0].fixed} />
          </div>
        </div>

        <div className="person">
          <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
          <div className="person__text">
            <h2> {data.person.nodes[0].imienazwisko} </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pretium elit ac nisl feugiat, id porttitor felis mattis. Fusce
              nulla ante, ornare sit amet est et, semper aliquet ex. Duis
              finibus lobortis sollicitudin. Quisque maximus volutpat
              condimentum.
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
      filter: { zawD: { eq: "fizjoterapeuta" } }
    ) {
      nodes {
        fotografia {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
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
