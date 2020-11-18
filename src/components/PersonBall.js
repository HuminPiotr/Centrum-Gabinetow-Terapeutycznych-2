import React from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"
import {Link} from 'gatsby';

const StyledPersonBall = styled.div`
  position: relative;
  width: 250px;
  height: 250px;

  overflow: hidden;
  border: solid gray 1px;
  border-radius: 50%;
  text-align: center;

  .photo {
    z-index: -1;
    position: relative;
    top: -22px;
  }
  .wave {
    position: absolute;
    left: -40px;
    bottom: -70px;
    z-index: 2;
  }
  p {
    color: white;
    position: absolute;
    font-size: ${({ theme }) => theme.fontSize.small};
    z-index: 3;
    width: 70%;
    left: 50%;
    margin-left: -35%;
  }
  .title {
    bottom: 29px;
  }
  .subtitle {
    bottom: 10px;
  }
  ${({ second }) =>
    second &&
    css`
      .wave,
      p {
        display: none;
      }
      .photo {
        top: 0;
      }
    `}
`

const PersonBall = ({ photo, title, subtitle, second, link=false }) => {
  const key = String(subtitle);
  let linkName;
  const subtitleUpperCase = key.toUpperCase();

  switch(subtitleUpperCase){
    case 'PSYCHOLOG':
      linkName='/psycholog'
      break;
    case 'PEDAGOG':
        linkName='/terapia-pedagogiczna'
        break;
    case 'LOGOPEDA':
          linkName='/logopeda'
          break;
    case 'FIZJOTERAPEUTA':
      linkName='/fizjoterapia'
      break;
    case 'TERAPEUTA SI':
      linkName='/terapia-sensoryczna'
      break;
  }
  return (
    <StyledPersonBall class="personBall" second={second}>
      <div>
        {link ? 
          <Link to={`${linkName}#person`}><Image className="photo" fluid={photo.fluid} />
              <img className="wave" src="/fala2.svg" alt="wave"></img>
              <p className="title">{title}</p>
              <p className="subtitle">{subtitle}</p>
          </Link>
          : <> 
          <Image className="photo" fluid={photo.fluid} />
          <img className="wave" src="/fala2.svg" alt="wave"></img>
          <p className="title">{title}</p>
          <p className="subtitle">{subtitle}</p>
          </>

        }
        
        
      </div>
    </StyledPersonBall>
  )
}

export default PersonBall
