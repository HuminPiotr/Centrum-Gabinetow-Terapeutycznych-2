import React from "react"
import styled, { css } from "styled-components"
import ReactHtmlParser from "react-html-parser"

import Image from "gatsby-image"
import ButtonLink from "./ButtonLink"

const slugify = require("slugify")

const StyledPreviewArticle = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
  height: 350px;
  margin: 25px 20px;
  padding: 0;

  border-radius: 5px 5px 0 0;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  transition: 0.3s;

  ${({ big }) =>
    big &&
    css`
      width: 100%;
      flex-direction: row;

      .gatsby-image-wrapper {
        width: 100%;
      }
      .top,
      .bar {
        height: 100% !important;
        text-align: left !important;
      }
      .top {
        width: 60% !important;
      }
      .bar {
        background-color: white !important;
        padding: 25px 50px !important;
      }
      .text {
        width: 100%;
      }
      header {
        font-size: ${({ theme }) => theme.fontSize.big} !important;
      }
      img {
        width: 100% !important;
      }
      button {
        align-self: flex-end;
      }
      &:hover {
        transform: translateY(0px) !important;
      }
      .text-preview {
        width: 100%;
      }

      @media (max-width: 640px) {
        flex-direction: column;
        align-content: center;
        height: auto;
        margin: 0 auto;
        margin-bottom: 15px;

        .bar {
          position: static;
          padding: 10px !important;
          flex-direction: column;

          button {
            width: 100%;
          }
          .text-preview {
            margin-bottom: 50px;
          }
        }
      }
    `}

  &:hover {
    transform: translateY(-5px);
  }
  &:hover h2 {
    color: ${({ theme }) => theme.color.primary};
  }

  h2 {
    color: black;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.basic};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .bar {
    position: relative;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 50%;
    margin: 0;
    padding: 15px 5px 5px 5px;
    background-color: ${({ theme }) => theme.color.secondary};

    word-wrap: break-word;
    text-align: center;
  }
  .top {
    height: 50%;
    width: 100%;
  }
  header {
    font-size: ${({ theme }) => theme.fontSize.basic};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.color.tertiary};
  }
  button {
    position: relative;
    bottom: 15px;
  }
`

const StyledImage = styled(Image)`
  position: relative;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
`

const PreviewArticle = ({
  title,
  image,
  author,
  date,
  content = null,
  big,
}) => {
  const slugifiedTitle = slugify(title, { lower: true })

  return (
    <StyledPreviewArticle big={big}>
      <div className="top">
        <StyledImage fluid={image} alt="imageArticle" />
      </div>
      <section className="bar">
        <div className="text">
          <header>{title}</header>
          <span>
            {author} {date}
          </span>
        </div>
        <div className="text-preview">
          {content ? makeExcerpt(content, 350) : null}
        </div>
        <ButtonLink className="button" link={`/blog/${slugifiedTitle}`}>
          Czytaj więcej
        </ButtonLink>
      </section>
    </StyledPreviewArticle>
  )
}

const makeExcerpt = (content, charsNumber) => {
  const regex = /<[^<>]+>/g
  let excerpt = content.replace(regex, " ")
  excerpt = ReactHtmlParser(excerpt)
  excerpt = excerpt[0]
  return excerpt.slice(0, charsNumber) + `...`
}
export default PreviewArticle
