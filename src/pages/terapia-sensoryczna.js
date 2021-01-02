import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

import PersonBall from "../components/PersonBall"
import HeaderIcon from "../components/HeaderIcon"
import SEO from "../components/seo"

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
  .logo {
      position: absolute;
      right: 0;
      top: 200px;
    }
  .person {
    display: flex;
    align-items: center;
    margin: 50px 0;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.big};
    }
    .personBall{
        width: 25%;
    }
    &__logo{
        width:15%;
        text-align: right;
    }
    &__text {
      width: 60%;
      margin-left: 25px;
    }
    p {
      text-indent: 40px;
      margin: 0;
      text-align: left;
    }
  }
  .info {
    display: flex;
    justify-content: space-around;

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
    margin: 15px auto;
    margin-bottom: 45px;
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
      }
      &__logo{
        text-align: center;
        order: -1;
        width:100%;
        margin-bottom: 25px;
      }
    }
    .info{
      h2{
        text-align: center;
      }
    }
  }
`

const TerapiaSensorycznaPage = ({ data }) => (
  <>
  <SEO title="Terapia sensoryczna" />
    <StyledWrapper>
      <h1>Gabinet integracji sensorycznej</h1>

      
      <div className="person" id="person">
        <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
        <div className="person__text">
          <h2> {data.person.nodes[0].imienazwisko} </h2>
          <p>
            Certyfikowany Diagnosta i Terapeuta Integracji Sensorycznej,
            Terapeuta Ręki, Oligofrenopedagog, Terapeuta Zajęciowy, Nauczyciel
            Wychowania Przedszkolnego.
          </p>
          <p>
            W 2009 roku ukończyłam 5-letnie studia magisterskie na Akademii
            Podlaskiej w Siedlcach na kierunku pedagogika – kształcenie
            zintegrowane i wychowanie przedszkolne.W tym samym roku podjęłam
            studia podyplomowe na kierunku oligofrenopedagogiki na Akademii
            Pedagogiki Specjalnej im. Marii Grzegorzewskiej w Warszawie. W 2018
            roku uzyskałam uprawnienia terapeuty integracji sensorycznej i
            terapeuty zajęciowego. Od 8 lat jestem czynnym zawodowo nauczycielem
            wychowania przedszkolnego.
          </p>
          <p>
            Do pracy z dzieckiem podchodzę z pasją i zaangażowaniem. Ważne jest
            dla mnie indywidualne podejście do każdego dziecka, dostosowanie
            swojego działania do jego potrzeb, wyrównywanie i kompensacja
            braków, ale także aktywizacja i wzmacnianie niezaburzonych funkcji,
            odkrywanie i rozwijanie zdolności.{" "}
          </p>
          <p>
            Duże znaczenie przywiązuję również do współpracy z rodzicami,
            ponieważ trudności, jakie przejawia dziecko bardzo często wpływają
            na obszary codziennego życia i mogą odbijać się na funkcjonowaniu
            całej rodziny. Rodzice będąc głównymi opiekunami dziecka kierują
            jego rozwojem i wychowaniem i niemalże w każdej minucie życia
            swojego dziecka mają możliwość wspomagania, kontroli i obserwacji.
            Dlatego wspólna praca rodziców i terapeuty z dzieckiem, stały
            kontakt rodziców z terapeutą i wzajemne przekazywanie oraz omawianie
            zmian w funkcjonowaniu dziecka, stwarzają najlepsze warunki dla
            rozwoju psychoruchowego dziecka, co wpływa nie tylko na rozwój
            samego dziecka, ale także na funkcjonowanie całej rodziny.
          </p>
        </div>
        <div className="person__logo">
          <Image fixed={data.logo.nodes[0].fixed} />
        </div>
      </div>

      <div className="content">
        <div className="content__text">
          <h2>
            Intrgracja Sensoryczna zalecana dla osób u których występują
            trudności w zakresie:
          </h2>
          <ul>
            <li>umiejętności ruchowych,</li>
            <li>problemów emocjonalnych,</li>
            <li>opóźniony rozwój mowy,</li>
            <li>opanowania umiejętności szkolnych,</li>
            <li>nadpobudliwości psychoruchowej,</li>
            <li>nadwrażliwośći na ruch.</li>
          </ul>
          <h2>Terapia ręki</h2> <p> - w czym pomaga terapia ręki?</p>
          <ul>
            <li>poprawia napięcie mięśniowe kończyny górnej,</li>
            <li>pomaga wypracować prawidłowy chwyt ręki,</li>
            <li>kształtuje koordynację wzrokowo - ruchową (oko - ręka),</li>
            <li>rozwija precyzyjne ruchy ręki,</li>
            <li>wydłuża zdolność koncentracji uwagi.</li>
          </ul>
          <h2>Terapia neurotaktylna</h2>
          <p>
            Jest wykorzystywana zarówno u dzieci, jak i dorosłych podczas pracy
            z:
          </p>
          <ul>
            <li>porażeniami mózgowymi,</li>
            <li>autyzmen,</li>
            <li>zachowaniami agresywnymi,</li>
            <li>lękami i fobiami,</li>
            <li>opóźnieniami w rozwoju umysłowym.</li>
          </ul>
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

export const query = graphql`
  {
    logo: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo-sensoryczna/" } } }
    ) {
      nodes {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    person: allDatoCmsProfileOsobowe(filter: { zawD: { eq: "Terapeuta SI" } }) {
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

export default TerapiaSensorycznaPage
