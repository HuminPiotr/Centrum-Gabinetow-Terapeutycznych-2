import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButtonLink = styled.button`
  color: white;
  box-shadow: 0;
  border: 0;
  background-color: transparent;

  img {
    width: 25px;
    margin-left: 15px;
  }
`
const StyledLink = styled(Link)`
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 30px;

  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.color.quaternary};
  }
`

const ButtonLink = ({ link, children }) => (
  <StyledButtonLink>
    <StyledLink target="_blank" to={link}>
      {children}
    </StyledLink>
    {/* {icon && <img src={icon} />} */}
  </StyledButtonLink>
)

export default ButtonLink
