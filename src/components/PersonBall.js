import React from "react"
import styled, { css } from "styled-components"
import Image from "gatsby-image"

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

const PersonBall = ({ photo, title, subtitle, second }) => {
  return (
    <StyledPersonBall second={second}>
      <div>
        <Image className="photo" fluid={photo.fluid} />
        <img className="wave" src="/fala.svg" alt="wave"></img>
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </StyledPersonBall>
  )
}

export default PersonBall
