import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

import { Link } from "gatsby"

import { Carousel } from "react-bootstrap"

const StyledCarousel = styled(Carousel)`
  position: relative;
  margin-top: -175px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 75vh;
  z-index: 0;

  .carousel-indicators li {
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  @media (max-width: 640px) {
    margin-top: 0px;

    height: 340px;
  }


`

const CarouselItem = styled(Carousel.Item)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 75vh;
  padding: 0 13rem;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position:  50% 25%;
  background-size: cover;

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 640px) {
    padding: 10px;
    padding-bottom: 45px;
    background-position-y: -100px;
    .carousel__image {
      display: none !important;
    }
  }
`


const SlideContent = styled.div`
  width: 70%;
  min-height: 50%;
  position: relative;
  top: 15%;
  color: ${({ theme }) => theme.color.tertiary};
  text-shadow: 2px 2px ${({ theme }) => theme.color.secondary};
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 55px;
  margin:auto;

  h2 {
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.veryBig};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    transition: 0.4s;
    margin-bottom: 15px;
  }




  li {
    margin-left: 50px;
    font-size: 2.4rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: black;
    text-shadow: none;
    list-style-type: square;
  }

  @media (max-width: 640px) {
    width: 100%;
    top: 0;
    h2 {
      font-size: 2.8rem;
    }
    li {
      font-size: ${({ theme }) => theme.fontSize.basic};
    }
  }
`

const MainCarousel = () => {
  const data = useStaticQuery(query)


  return (
    <StyledCarousel fade interval={3000} >

      <CarouselItem background={data.first.fluid.src}>

      </CarouselItem>
      <CarouselItem background={data.fizjo.fluid.src}>
        <div className="shadow" />
        <SlideContent>
          <h2>
            Gabinet fizjoterapeutyczny
          </h2>
          <ul>
            <li>Masaż</li>
            <li>Rehabilitacja wad postawy</li>
            <li>Rehabilitacja neurologiczna</li>
          </ul>
        </SlideContent>
      </CarouselItem>

      <CarouselItem background={data.logopeda.fluid.src}>
        <div className="shadow" />
        <SlideContent>
          <h2>
            Gabinet logopedyczny
          </h2>
          <ul>
            <li>Terapia</li>
            <li>Diagnoza</li>
            <li>Konsultacje</li>
          </ul>
        </SlideContent>
      </CarouselItem>

      <CarouselItem background={data.sensoryczna.fluid.src}>
        <div className="shadow" />
        <SlideContent>
          <h2>
             Gabinet terapii integracji sensorycznej
          </h2>
          <ul>
            <li>Terapia</li>
            <li>Diagnoza</li>
            <li>Konsultacje</li>
          </ul>
        </SlideContent>
      </CarouselItem>

      <CarouselItem background={data.pedagog.fluid.src}>
        <div className="shadow" />
        <SlideContent>
          <h2>
             Gabinet terapii pedagogicznej 
          </h2>
          <ul>
            <li>Bajkoterapia</li>
            <li>Muzykoterapia</li>
            <li>Arteterapia</li>
          </ul>
        </SlideContent>
      </CarouselItem>

    </StyledCarousel>
  )
}

const query = graphql`
  {
    first: imageSharp(fluid: {originalName: {regex: "/first-slide/"}}){
      fluid(maxWidth:2400){
        src
      }
    }
      fizjo: imageSharp(fluid: {originalName: {regex: "/fizjoterapia-slide/"}}){
      fluid(maxWidth:2400){
        src
      }
    }
        logopeda: imageSharp(fluid: {originalName: {regex: "/logopeda-slide/"}}){
      fluid(maxWidth:2400){
        src
      }
    }
        pedagog: imageSharp(fluid: {originalName: {regex: "/pedagog-slide/"}}){
      fluid(maxWidth:2400){
        src
      }
    }
        sensoryczna: imageSharp(fluid: {originalName: {regex: "/terapia-sensoryczna/"}}){
      fluid(maxWidth:2400){
        src
      }
    }

  }
`
export default MainCarousel
