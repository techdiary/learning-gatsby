import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h2>Index Page</h2>
        <h4>I'm aayush, living in pink jaipur</h4>
        <Description>
          Need a developer? <Link to="/contact">Contact Me.</Link>
        </Description>
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
