import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import PreviewArticle from "../components/PreviewArticle"
import PagnitationNavigation from "../components/PagnitationNavigation"

const BlogWrapper = styled.div`
  margin: 25px 130px 80px;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    font-size: ${({ theme }) => theme.fontSize.big};
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 25px;
  }

  @media (max-width: 640px) {
    margin: 15px 5px;
    .top {
      width: 100% !important;
    }
  }
`

const BlogLayout = ({ data, pageContext }) => {
  const posts = data.allDatoCmsArtykul.nodes
  const { currentPage, numPages } = pageContext

  const blogPostList = posts.map(post => (
    <PreviewArticle
      title={post.tytul}
      author={post.autor}
      date={post.data}
      key={post.id}
      image={post.miniaturka.fluid}
      content={post.tresc}
      big
    />
  ))

  return (
    <BlogWrapper>
      <h1>Blog</h1>
      {blogPostList}
      <PagnitationNavigation currentPage={currentPage} numPages={numPages} />
    </BlogWrapper>
  )
}

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allDatoCmsArtykul(
      limit: $limit
      skip: $skip
      sort: { fields: meta___createdAt, order: DESC }
    ) {
      nodes {
        id
        autor
        data
        tytul
        tresc

        miniaturka {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default BlogLayout
