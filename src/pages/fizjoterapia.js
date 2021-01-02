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
    display: flex;
  }


  .person {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 50px 0;
    position: relative;
    h2 {
      font-size: ${({ theme }) => theme.fontSize.big};
    }
    .personBall{
        width: 25%;
    }
    &__logo{
        width:25%;
        text-align: right;
    }


    &__text {
      width: 50%;
      margin-left: 25px;
      p {
        text-align: left;
      }
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


  .info {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    h2 {
      margin-bottom: 25px;
    }

    p {
      font-size: ${({ theme }) => theme.fontSize.basic};
    }

  }

  @media (max-width: 640px) {
    margin: 25px;

    .person {
      flex-direction: column;
      text-align: center;
      

      &__text {
        margin: 0;
        width: 100%;

        ul{
          text-align: left;
        }
      }

      &__logo{
        text-align: center;
        order: -1;
        width:100%;
      }

    }
    .info{
      h2{
        text-align: center;
      }
    }
  }
`

const FizjoterapiaPage = ({ data }) => {
  return (
    <>
      <StyledWrapper>
      <SEO title="Fizjoterapeuta" />
        <h1>Gabinet fizjoterapii</h1>

        <div className="person" id="person">
          <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
          <div className="person__text">
            <h2> {data.person.nodes[0].imienazwisko} </h2>
            <p>
            Absolwentka Akademii Wychowania fizycznego na kierunku : Fizjoterapia
            </p>
            <p>Kursy i szkolenia:</p>
            <ul>
              <li>FITS (Funkcjonalna Indywididualna Terapia Skolioz)</li>
              <li>IBITA Bobath dla dorosłych</li>
              <li>Kinezjotaping podstawowy</li>
              <li>PNF podstawowy</li>
              <li>rozwijający</li>
              <li>Masaż głęboki</li>
              <li>Kurs Masażu Klasycznego oraz Kurs Masażu dla Zaawansowanych (drugiego stopnia)</li>
              <li>Hipoterapia</li>
            </ul>
          </div>
          <div className="person__logo">
            <Image fixed={data.logo.nodes[0].fixed} />
        </div>

        </div>


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


        </div>
        <div className="info">
          <div >
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
      filter: { zawD: { eq: "Fizjoterapeuta" } }
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
