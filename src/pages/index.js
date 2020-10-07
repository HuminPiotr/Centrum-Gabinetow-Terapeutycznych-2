import React from "react"
import SEO from "../components/seo"

import MainCarousel from "../components/MainCarousel"
import Citation from "../components/Citation"
import LatestArticles from "../components/LatestArticles"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <MainCarousel />
    <Citation></Citation>
    <LatestArticles />
  </>
)

export default IndexPage
