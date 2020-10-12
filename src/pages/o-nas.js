import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import PersonBall from "../components/PersonBall"

// import SEO from "../components/seo"

const StyledWrapper = styled.div`
  margin: 25px 130px 80px;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    font-size: ${({ theme }) => theme.fontSize.big};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 25px;
  }
  h2 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    font-size: ${({ theme }) => theme.fontSize.basic};
  }
  .description {
    display: flex;
    margin-bottom: 25px;
    &__text {
      width: 70%;
      margin-right: 15px;
    }
    &__photo {
      width: 30%;
    }
  }
  .personBalls {
    display: flex;
    align-items: center;
    flex-grow: 0;
    flex-wrap: wrap;
    justify-content: center;

    .personBall {
      margin: 15px 25px;
    }
  }
  @media (max-width: 640px) {
    margin: 25px;
    .description {
      flex-direction: column;

      &__text {
        width: 100%;
        margin: 0;
      }
      &__photo {
        width: 100%;
      }
    }
  }
`

const ONasPage = ({ data }) => {
  const personBallList = data.allDatoCmsProfileOsobowe.nodes.map(item => (
    <div className="personBall">
      <PersonBall
        photo={item.fotografia}
        title={item.imienazwisko}
        subtitle={item.zawD}
        key={item.imienazwisko}
      />
    </div>
  ))
  return (
    <>
      <StyledWrapper>
        {/* <SEO title="Home" /> */}
        <h1>O nas</h1>
        <div className="description">
          <div className="description__text">
            <h2>Kim jesteśmy?</h2>
            <p>
              Terapeuta, psycholog, fizjoterapeuta, pedagog i logopeda, których
              łączy miłość do ludzi i pragnienie, aby pomagać im w jak
              najbardziej efektywny sposób. My nie rozmawiamy o problemach, my
              staramy się z nimi zmierzyć!
              <br />
              Pacjenci są naszym największym dobrem, a zaspokojenie ich potrzeb
              i oczekiwań - naszym najwyższym celem. To nie tylko motto, ale
              przede wszystkim dewiza, którą kierujemy się na co dzień. Nasze
              centrum łączy osoby, które z pasją i zaangażowaniem realizują
              marzenia, wierząc, że możemy pomóc Tobie i Twojemu dziecku.
            </p>
          </div>
          <div className="description__photo">
            <Image fluid={data.allImageSharp.nodes[0].fluid}></Image>
          </div>
        </div>

        <h2>Nasza ekipa</h2>
        <div className="personBalls">{personBallList}</div>
      </StyledWrapper>
    </>
  )
}
export const query = graphql`
  {
    allImageSharp(filter: { fluid: { originalName: { eq: "placówka.jpg" } } }) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    allDatoCmsProfileOsobowe {
      nodes {
        fotografia {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        imienazwisko
        zawD
      }
    }
  }
`

export default ONasPage
