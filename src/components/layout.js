import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "./layout.module.css"
const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
