import React from "react"
import GlobalStyle from "../theme/GlobalStyle"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/mainTheme"

import CompleteNavigation from "../components/CompleteNavigation"
import Footer from "../components/Footer"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <CompleteNavigation />

        {children}
        <Footer />
      </>
    </ThemeProvider>
  </>
)

export default MainLayout
