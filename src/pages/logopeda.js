import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"

import PersonBall from "../components/PersonBall"
import HeaderIcon from "../components/HeaderIcon"
import ButtonLink from "../components/ButtonLink"

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
      margin-left: 50px;
      align-items: flex-start;
      height: 100%;
    }
    &__text {
      p {
        display: block;
        width: 100%;
      }
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
  .videos {
    text-align: center;
    margin: 100px auto;
    max-width: 480px;

    h2 {
      margin-bottom: 25px;
    }
    video {
      width: 100%;
      height: auto;
    }
    button {
      margin-top: 40px;
    }
  }
  .galery {
    text-align: center;
    h2 {
      margin-top: 40px;
    }
    &__photos {
      display: flex;
    }
    &__photo {
      flex-basis: 50%;
      margin: 5px;
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
    .galery {
      &__photos {
        flex-direction: column;
      }
    }
    .info {
      flex-direction: column;
    }
  }
`

const LogopedaPage = ({ data }) => (
  <>
    <StyledWrapper>
      <h1>Gabinet logopedyczny</h1>
      <div className="content">
        <div className="content__text">
          <p>
            Gabinet logopedyczny jest miejscem, w którym mogę realizować swoje
            pasje. Praca logopedy jest dla mnie źródłem satysfakcji, dając mi
            możliwość współpracy z drugim człowiekiem. W swojej pracy kieruję
            się koniecznością dostosowywania programu terapii do indywidualnych
            możliwości i potrzeb dziecka, a głównym założeniem jest zarówno
            stymulowanie mowy, jak i oddziaływanie na wszystkie sfery rozwojowe.
            Uważam, że tylko holistyczne podejście gwarantuje sukces w terapii.
            W moim gabinecie panuje przyjemna atmosfera, która zachęca do
            rozwijania komunikacji oraz sprzyja rozwojowi mowy. Tworzę własne
            pomoce logopedyczne, które są bardzo lubiane przez dzieci, dodatkowo
            łatwo i za niewielkie pieniążki można wykonać je w domu. Przyczynia
            się to do większego zaangażowania dziecka i rodziców poprzez wesołą
            zabawę w przebieg terapii logopedycznej. W trosce o wysoki standard
            prowadzonej terapii logopedycznej, a także z racji zainteresowań i
            chęci poszerzania swoich kwalifikacji zawodowych, biorę czynny
            udział w
            <strong> warsztatach, kursach, szkoleniach i konferencjach </strong>
            o tematyce logopedycznej. Prywatnie spełniam się jako żona i matka
            dwojga wspaniałych dzieci. Życie rodzinne codziennie uczy mnie
            czegoś, co mogę wykorzystać w życiu zawodowym. Wiem, że pracę trzeba
            zacząć od zbudowania wzajemnego zaufania i akceptacji. Dlatego dbam
            o dobrą atmosferę przy spotkaniu z każdym małym pacjentem. To ona
            zapewnia najlepsze rezultaty terapii.
          </p>
        </div>

        <div className="content__logo">
          <Image fixed={data.logo.nodes[0].fixed} />
        </div>
      </div>
      <h2>
        Serdecznie zapraszam na indywidualną terapię logopedyczną do swojego
        gabinetu.
      </h2>

      <div className="galery">
        <h2>Ćwiczenia oddechowe</h2>
        <div className="galery__photos">
          {data.photos.nodes.map(photo => (
            <Image
              target="_blank"
              className="galery__photo"
              fluid={photo.fluid}
            />
          ))}
        </div>
      </div>

      <div className="videos">
        <h2>Ćwiczenia logopedyczne online</h2>
        <video width="400" height="240" controls>
          <source src="video1.mp4" type="video/mp4"></source>
        </video>
        <br />
        <video width="400" height="240" controls>
          <source src="video2.mp4" type="video/mp4"></source>
          Twoja przeglądarka nie odtwarza plików video
        </video>
        <ButtonLink
          link="https://www.youtube.com/channel/UCqBVPjoEKKVjowMdIGVwmkw"
          icon="/yt-icon.png"
        >
          Więcej ćwiczeń tutaj!
          <img src="/yt-icon.png" alt="ytIcon" />
        </ButtonLink>
      </div>

      <div className="person">
        <PersonBall photo={data.person.nodes[0].fotografia} key="1" second />
        <div className="person__text">
          <h2> {data.person.nodes[0].imienazwisko} </h2>
          <p>
            Uwielbiam być wśród ludzi i im pomagać. Mam szczęście, że moja pasja
            jest moją pracą – jestem logopedą, pedagogiem oraz terapeutą ręki.
            Dodatkowo społecznie jestem prezesem dwóch stowarzyszeń:
            stowarzyszenie „Przyjazna Szkoła Bez Barier” oraz stowarzyszenie
            „Rodzinne Ogrody Działkowe „Malwa” w Białej Podlaskiej. Ukończyłam
            studia na kierunkach pedagogika kształcenie zintegrowane i
            wychowanie przedszkolne, informatyka nauczycielska oraz logopedia.
            Po studiach zdobywałam doświadczenie jako pedagog, logopeda i
            informatyk w placówkach oświatowych. Zdobyte kwalifikacje oraz
            umiejętności pozwoliły mi na tworzeniu własnych pomocy
            terapeutycznych a także umieszczanie filmików na kanale youtube z
            pomysłami dla dzieci na ćwiczenia logopedyczne. Nawiązałam
            współpracę z osobami, które tak jak ja z pasją i zaangażowaniem
            realizują swoje marzenia wierząc, że ich ciężka praca ma sens. W
            lutym 2020 roku otworzyłam własny gabinet terapeutyczny.
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
          <p>??????????????????????</p>
        </div>
      </div>
    </StyledWrapper>
  </>
)

export const query = graphql`
  {
    logo: allImageSharp(
      filter: { fixed: { originalName: { regex: "/logo-logopeda/" } } }
    ) {
      nodes {
        fixed(width: 250, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    photos: allImageSharp(
      filter: { fluid: { originalName: { regex: "/ćwiczenia-oddechowe/" } } }
    ) {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    person: allDatoCmsProfileOsobowe(
      filter: { zawD: { regex: "/logopeda/" } }
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

export default LogopedaPage
