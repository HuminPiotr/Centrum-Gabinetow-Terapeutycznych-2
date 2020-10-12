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
    /* background-color: ${({ theme }) => theme.color.primary}; */
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
  width: 100vw;
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
// const StyledImage = styled(Image)`
//   position: relative;
//   top: 0;
//   float: right;
//   width: 100%;
//   object-fit: contain;
// `

const SlideContent = styled.div`
  width: 50%;
  position: relative;
  top: 25%;
  color: ${({ theme }) => theme.color.tertiary};
  text-shadow: 2px 2px ${({ theme }) => theme.color.secondary};
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 55px;

  h2 {
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.veryBig};
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    transition: 0.4s;
    margin-bottom: 15px;
  }

  h2::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 0px;
    height: 50%;
    background-color: white;
    border-radius: 5px;
    transition: 0.5s ease;
    z-index: -1;
  }
  h2:hover::before {
    width: 100%;
    background-color: ${({ theme }) => theme.color.secondary};
  }
  h2:hover {
    transform: translateY(0px);
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
    /* position: static; */
    h2 {
      font-size: ${({ theme }) => theme.fontSize.big};
    }
    li {
      font-size: ${({ theme }) => theme.fontSize.basic};
    }
  }
`

const MainCarousel = () => {
  const data = useStaticQuery(query)
  const {
    allImageSharp: { nodes },
  } = data
  return (
    <StyledCarousel fade interval={6000} controls={false}>
      <CarouselItem background={nodes[1].fluid.src}>
        <div className="shadow" />
        {/* <StyledImage
          className="carousel__image"
          fluid={nodes[1].fluid}
          alt="slide2"
        ></StyledImage> */}
        <SlideContent>
          <h2>
            <Link to="/psycholog">Gabinet psychologiczny</Link>
          </h2>
          <ul>
            <li>Terapia</li>
            <li>Diagnoza</li>
            <li>Konsultacje</li>
          </ul>
        </SlideContent>
      </CarouselItem>
      <CarouselItem background={nodes[0].fluid.src}>
        <div className="shadow" />
        {/* <StyledImage
          className="carousel__image"
          fluid={nodes[0].fluid}
          alt="slide1"
        ></StyledImage> */}
        <SlideContent>
          <h2>
            <Link to="/terapia-sensoryczna">
              Gabinet terapii integracji sensorycznej
            </Link>
          </h2>
          <ul>
            <li>Terapia ręki</li>
            <li>Terapia neurotaktylna</li>
          </ul>
        </SlideContent>
      </CarouselItem>

      <CarouselItem background={nodes[2].fluid.src}>
        <div className="shadow" />
        {/* <StyledImage
          className="carousel__image"
          fluid={nodes[2].fluid}
          alt="slide3"
        ></StyledImage> */}
        <SlideContent>
          <h2>
            <Link to="/fizjoterapia">Gabinet fizjoterapeutyczny</Link>
          </h2>
          <ul>
            <li>Masaż</li>
            <li>Rehabilitacja wad postawy</li>
            <li>Rehabilitacja neurologiczna</li>
          </ul>
        </SlideContent>
      </CarouselItem>
      <CarouselItem background={nodes[4].fluid.src}>
        <div className="shadow" />
        {/* <StyledImage
          className="carousel__image"
          fluid={nodes[4].fluid}
          alt="slide4"
        ></StyledImage> */}
        <SlideContent>
          <h2>
            <Link to="/logopeda">Gabinet logopedyczny</Link>
          </h2>
          <ul>
            <li>Terapia</li>
            <li>Diagnoza</li>
            <li>Konsultacje</li>
          </ul>
        </SlideContent>
      </CarouselItem>
      <CarouselItem background={nodes[3].fluid.src}>
        <div className="shadow" />
        {/* <StyledImage
          className="carousel__image"
          fluid={nodes[3].fluid}
          alt="slide4"
        ></StyledImage> */}
        <SlideContent>
          <h2>
            <Link to="/terapia-pedagogiczna">
              Gabinet terapii pedagogicznej
            </Link>
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
    allImageSharp(filter: { fluid: { originalName: { regex: "/slide/" } } }) {
      nodes {
        fluid(maxWidth: 2400) {
          src
        }
      }
    }
  }
`
export default MainCarousel
