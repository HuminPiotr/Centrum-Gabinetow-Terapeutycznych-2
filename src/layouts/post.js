import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Image from "gatsby-image"
import HeaderIcon from "../components/HeaderIcon"
import ReactHtmlParser from "react-html-parser"
import SEO from "../components/seo"

const ArticleWrapper = styled.div`
  margin: 25px 130px 80px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    color: black;
  }
  h2 {
    margin: 10px 0;
  }

  ul {
    margin-left: 50px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSize.basic};
  }
  .content img{
    width: 100%;
    margin-bottom: 10px;
  }
  table,
  td,
  tr {
    border: solid 1px darkgrey;
  }
  span {
    display: flex;
  }
  .author {
    font-size: 1.75rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-left: 25px;
  }
  .featuredImage {
    text-align: center;
  }

  @media (max-width: 640px) {
    margin: 15px;
  }
`
const StyledImage = styled(Image)`
  margin: 0 auto;
  max-width: 50vw;
`

const PostLayout = ({ data }) => {
  return (
    <ArticleWrapper>
      <SEO title={data.datoCmsArtykul.tytul} />
      <StyledImage
        fluid={data.datoCmsArtykul.miniaturka.fluid}
        alt="miniaturka"
      />

      <h1>{data.datoCmsArtykul.tytul}</h1>
      <span>
        <HeaderIcon
          icon={data.file.publicURL}
          title={data.datoCmsArtykul.data}
        />
        <p className="author"> {data.datoCmsArtykul.autor}</p>
      </span>
      <hr></hr>
      <div class="content">
      {ReactHtmlParser(data.datoCmsArtykul.tresc)}
      </div>
    </ArticleWrapper>
  )
}

export const query = graphql`
  query querySingleArticle($id: String!) {
    datoCmsArtykul(id: { eq: $id }) {
      id
      autor
      tytul
      tresc
      data
      miniaturka {
        fluid(maxWidth: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
    file(name: { eq: "calendar-icon" }) {
      publicURL
    }
  }
`
export default PostLayout
