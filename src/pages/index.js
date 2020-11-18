import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'

import MainCarousel from "../components/MainCarousel"
// import Citation from "../components/Citation"
import LatestArticles from "../components/LatestArticles"
import TopNav from '../components/TopNav'

const StyledWrapper = styled.div`
  @media (max-width: 640px) {
  margin-top: 10vw;
  }
`


const IndexPage = () => (
  <>
    <StyledWrapper className="hero">
      <TopNav />
      <MainCarousel />
    </StyledWrapper>
    {/* <Citation></Citation> */}
    <LatestArticles />
  </>
)

export default IndexPage
