/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "./node_modules/react"
import PropTypes from "./node_modules/prop-types"
import { useStaticQuery, graphql } from "./node_modules/gatsby"
import styled, { ThemeProvider } from './node_modules/styled-components'
import { Gray } from '../../themes/Gray'
import Header from "./header"
import GlobalStyle from '../GlobalStyle'

const Content = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={Gray}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Content>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Content>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Layout}
