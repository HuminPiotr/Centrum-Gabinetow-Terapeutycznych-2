import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledWrapper = styled.h1`
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.basic};
  line-height: 110%;
  color: white;
  @media (max-width: 640px) {
    position: absolute;
    top: 25px;
    left: 35px;
    font-size: ${({ theme }) => theme.fontSize.basic};
  }
`

const Logo = () => (
  <StyledWrapper>
    <Link to="/">
      Centrum <br />
      Gabinetów <br />
      Terapeutycznych
    </Link>
  </StyledWrapper>
)

export default Logo
