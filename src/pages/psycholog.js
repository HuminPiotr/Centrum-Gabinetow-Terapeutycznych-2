import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import PersonBall from "../components/PersonBall"
import HeaderIcon from "../components/HeaderIcon"
// import SEO from "../components/seo"

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
    margin-top: 50px;
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
  }
  @media (max-width: 640px) {
    .info {
      flex-direction: column;
    }
  }
`

const PsychologPage = ({ data }) => (
  <>
    <StyledWrapper>
      <h1>Gabinet psychologiczny</h1>
      <div className="content">
        <div className="content__text">
          <h2>
            Jeśli chodzisz na terapie, to nie znaczy, że z Tobą jest coś nie
            tak. <br /> To po prostu może znaczyć że:
          </h2>
          <ul>
            <li>chcesz wyjaśnienia niektórych obszarów w życiu,</li>
            <li>chcesz zmierzyć się ze złożonymi emocjami,</li>
            <li>chcesz pprzepracować traumatyczne doświadczenia,</li>
            <li>chcesz przełamać negatywne wzorce myślenia,</li>
            <li>chcesz uczyć się nowych technik radzenia sobie,</li>
            <li>koncentrujesz się na rozwoju osobistym</li>
          </ul>

          <h2>
            Przestańmy zawstydzać tych, którzy mają odwagę zadbać o siebie i
            innych!
          </h2>
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
            Jestem dyplomowanym psychologiem z wieloletnim stażem. Oferuję pomoc
            psychologiczną w zakresie:
            <br />
            -trudności wychowawczych <br />
            -problemów emocjonalnych (niepokój, leki, obniżony nastrój,
            trudności kontroli emocji i zachowania) <br />
            -zaburzeń o podłożu psychosomatycznym (tiki nerwowe, bóle głowy,
            bóle brzucha, jąkanie, mimowolne moczenie)
            <br />
            -trudności w budowaniu relacji i komunikacji w rodzinie i poza nią.
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

export const query = graphql`
  {
    logo: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo-psycholog/" } } }
    ) {
      nodes {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    person: allDatoCmsProfileOsobowe(filter: { zawD: { eq: "psycholog" } }) {
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
export default PsychologPage
