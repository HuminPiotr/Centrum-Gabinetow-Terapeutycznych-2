import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import PreviewArticle from "./PreviewArticle"

const StyledLatestArticles = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 25px 130px;
  flex-wrap: wrap;

  h3 {
    width: 100%;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    margin-bottom: 15px;
  }
  .hypertext {
    width: 100%;
    text-align: center;
    margin: 25px;
  }

  @media (max-width: 640px) {
    margin: 25px;
    h3 {
      width: 100%;
      text-align: center;
    }
  }
`

const StyledLink = styled(Link)`
  text-align: center;
  margin: 25px 0;
  font-size: ${({ theme }) => theme.fontSize.basic};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`

const LatestArticles = () => {
  const data = useStaticQuery(query)

  return (
    <StyledLatestArticles>
      <h3>Najnowsze wpisy</h3>
      {data.allDatoCmsArtykul.nodes.map(item => (
        <PreviewArticle
          title={item.tytul}
          author={item.autor}
          date={item.data}
          key={item.id}
          image={item.miniaturka.fluid}
        />
      ))}
      <div className="hypertext">
        <StyledLink to="/blog">Zobacz więcej</StyledLink>
      </div>
    </StyledLatestArticles>
  )
}

const query = graphql`
  {
    allDatoCmsArtykul(limit: 3, sort: { order: DESC, fields: id }) {
      nodes {
        id
        autor
        data
        tytul
        miniaturka {
          fluid(maxWidth: 300) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`
export default LatestArticles
