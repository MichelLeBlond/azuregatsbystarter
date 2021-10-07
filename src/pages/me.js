import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const mePage = () => (
    <Layout>
        <Seo title="Page two" />
        <h1>Hi from my page</h1>
        <p>Welcome to my page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default mePage
