import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import indexStyles from "./index.module.css"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h2>Index Page</h2>
        <h4>I'm aayush, living in pink jaipur</h4>
        <div className={indexStyles.description}>
          Need a developer? <Link to="/contact">Contact Me.</Link>
        </div>
        <p>
          Check out my <Link to="/blog">Blogs.</Link>
        </p>
        <p>
          Want to know more <Link to="/about">about me?</Link>
        </p>
      </Layout>
    </div>
  )
}

export default IndexPage
