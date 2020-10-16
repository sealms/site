import React from "react"
import Header from "../header/header"

import("./layout.module.scss")

const Layout = props => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
