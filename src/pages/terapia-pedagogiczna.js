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
    margin-top: 50px;
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

        <div className="person" id="person">
          <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
          <div className="person__text">
            <h2> {data.person.nodes[0].imienazwisko} </h2>
            <p>
            Nauczyciel z wieloletnim stażem, terapeuta pedagogiczny, posiada
          kwalifikacje do prowadzenia zajęć metodą choreoterapii. Prowadzi zajęcia korekcyjno –
          kompensacyjne, pracuje z dziećmi dotkniętymi dysleksją, dysgrafią <br /> i dysortografią.
            </p>
            <p>
            Od 15 lat pracuję w Szkole Podstawowej, wiem, jak ważna jest pomoc dziecku w przezwyciężaniu
            trudności, umożliwienie mu prawidłowego funkcjonowania w zespole i osiąganie sukcesów.
            Prowadząc zajęcia terapeutyczne, stosuję różnorodne metody i formy pracy, wykorzystuję pokrewne
            elementy technik stymulujących rozwój umiejętności szkolnych dziecka tj. elementy bajkoterapii,
            muzykoterapii i choreoterapii, udzielam wsparcia w edukacji szkolnej, wspomagam proces uczenia się
            poprzez ćwiczenia relaksacyjne i wyciszające.
            </p>
          </div>
        </div>
        
        <div className="content">
            <p>Bardzo cenię sobie trzy formy aktywności – muzykę, taniec i ruch. Uważam, że terapia przez
            sztukę wspomaga rozwój, koryguje zaburzenia, rozbudza wyobraźnię, aktywizuje i mobilizuje, dając
            poczucie własnej wartości <br />i satysfakcji.</p>

            <p>
            Aktywność twórcza pozwala dziecku uwierzyć w siebie, zaakceptować i pokonać ograniczenia czy
            trudności, daje możliwość wielozmysłowego poznania docierających do niego informacji o
            otaczającym świecie.
            </p>

            <p>
            <strong>Terapia pedagogiczna </strong> to idealna forma wsparcia dla dzieci ze specyficznymi trudnościami
            w uczeniu się (<strong>dysleksja</strong>, <strong>dysgrafia </strong>, <strong> dysortografia</strong>), z zaburzeniami koncentracji uwagi, z zaburzeniami
            emocjonalnymi, <br /> z zaburzoną koordynacją wzrokowo-słuchowo-ruchową. To doskonałe rozwiązanie
            dla dzieci nieśmiałych, nadwrażliwych, niesamodzielnych, mniej sprawnych ruchowo, manualnie czy
            grafomotorycznie.
            </p>

            <p>
            Zajęcia – przeprowadzane są w przyjaznej atmosferze, często w formie zabawy, dzięki czemu
            dzieci uczęszczają na nie bardzo chętnie. Ćwiczenia i zadania są formą treningu, który wydobywa
            potencjał intelektualny dziecka <br />i rozwija go wszechstronnie.
            </p>

            <p>Serdecznie zapraszam.</p>



          <div className="content__logo">
            {/* <Image fixed={data.logo.nodes[0].fixed} /> */}
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
