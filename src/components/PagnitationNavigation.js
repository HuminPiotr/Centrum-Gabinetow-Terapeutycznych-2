import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  list-style-type: none;

  li {
    margin: 10px;
    font-size: ${({ theme }) => theme.fontSize.basic};
  }
  .prev {
    position: absolute;
    left: 0;
  }
  .next {
    position: absolute;
    right: 0;
  }

  @media (max-width: 640px) {
    margin-bottom: 45px;
    li {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
    .prev,
    .next {
      margin-top: 45px;
    }
  }
`

const activeStyles = {
  color: "#4D1FAB",
  fontWeight: "600",
}

class PagnitationNavigation extends React.Component {
  render() {
    const { currentPage, numPages } = this.props
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString()
    const nextPage = "/blog/" + (currentPage + 1).toString()

    const navigation = []
    for (let i = 0; i < numPages; i++) {
      const link = i == 0 ? `/blog` : `/blog/${i + 1}`
      navigation.push(
        <li key={link}>
          <Link to={link} activeStyle={activeStyles}>
            {i + 1}
          </Link>
        </li>
      )
    }

    return (
      <StyledNavigation>
        {!isFirst && (
          <li className="prev">
            <Link to={prevPage} rel="prev">
              Poprzednia strona
            </Link>
          </li>
        )}
        {navigation.length > 1 ? navigation : null}
        {!isLast && (
          <li className="next">
            <Link to={nextPage} rel="next">
              Następna strona
            </Link>
          </li>
        )}
      </StyledNavigation>
    )
  }
}

export default PagnitationNavigation
