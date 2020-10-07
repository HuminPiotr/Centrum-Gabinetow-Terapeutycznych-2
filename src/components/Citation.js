import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"

const StyledCitation = styled.h2`
  width: 100%;
  text-align: center;
  margin: 45px auto;
  font-style: italic;
  font-family: serif;
`

const Citation = () => {
  const data = useStaticQuery(query)
  const citationList = data.allDatoCmsCytaty.nodes

  const citationNumber = Math.floor(Math.random() * citationList.length)

  return (
    <StyledCitation
      data-sal="slide-up"
      data-sal-delay="600"
      data-sal-easing="ease-out-back"
    >
      "{citationList[citationNumber].cytat}"
    </StyledCitation>
  )
}

const query = graphql`
  {
    allDatoCmsCytaty {
      nodes {
        cytat
      }
    }
  }
`
export default Citation
