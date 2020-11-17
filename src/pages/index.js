import React from "react"
import SEO from "../components/seo"
import styled from 'styled-components'

import MainCarousel from "../components/MainCarousel"
import Citation from "../components/Citation"
import LatestArticles from "../components/LatestArticles"
import TopNav from '../components/TopNav'

const StyledWrapper = styled.div`
  display: flex;
  nav{
    width: 40%
  }
  @media (max-width: 640px) {
    flex-direction: column;
    nav{
      width:100%;
    }
  }

`


const IndexPage = () => (
  <>
    {/* <SEO title="Home" /> */}
    <StyledWrapper class="hero">
      <TopNav />
      <MainCarousel />
    </StyledWrapper>
    <Citation></Citation>
    <LatestArticles />
  </>
)

export default IndexPage
