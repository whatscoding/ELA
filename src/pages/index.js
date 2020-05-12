import React from  'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout>
            <h4>Learn All The Skills Needed To Get A Job</h4>
            <h1>Build Your Analyst Career</h1>
            <p>We'll Help You Along Your Journey <Link to="/learn">LEARN</Link></p>
        </Layout>
    )
}

export default IndexPage