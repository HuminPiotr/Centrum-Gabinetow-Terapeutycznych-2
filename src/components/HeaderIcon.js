import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  color: white;
  display: flex;
  margin-bottom: 15px;
  font-size: ${({theme}) => theme.fontSize.big};
  h3 {
    margin: 0;
    line-height: 24px;
  }
  img {
    height: 24px;
    margin-right: 10px;
  }
`

const HeaderIcon = ({ icon, title }) => (
  <StyledWrapper className="headerIcon">
    <img src={icon} alt="icon"></img>
    <h3>{title}</h3>
  </StyledWrapper>
)

export default HeaderIcon
