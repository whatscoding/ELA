import React from  'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout>
            <h1>Landing page of the Entry Level Analyst guide</h1>
            <h2>You too can have fun being an analyst</h2>
            <p>Looking for more info? <Link to="/about">About</Link></p>
        </Layout>
    )
}

export default IndexPage