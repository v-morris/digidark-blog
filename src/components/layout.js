import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h2
          style={{
            ...scale(1),
            marginBottom: rhythm(1),
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h2>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            ...scale(0.7),
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{textAlign:`left`, paddingTop:`${rhythm(1.5)}`}}>
          © {new Date().getFullYear()}, DigiDark Development<br/>
          <a style={{color:`#990011`}} href="https://twitter.com/digidarkdev" target="_blank">Twitter</a>
          &nbsp;&nbsp;
          <a style={{color:`#990011`}} href="https://github.com/v-morris" target="_blank">Github</a>
          
        </footer>
      </div>
    )
  }
}

export default Layout
