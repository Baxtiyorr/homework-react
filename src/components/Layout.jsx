import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import Layout__left_side from "./Layout__left_side"
import Layuot__right_side from "./Layuot__right_side"

const Layout = () => {
  return (
    <Fragment>
      <Layout__left_side/>
      <Outlet/>
      <Layuot__right_side/>

    </Fragment>
  )
}

export default Layout
