import React from 'react'
import { useStaticQuery } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author, year
          }
        }
      }	
    `)
    return (
        <footer>
            {data.site.siteMetadata.author}, {data.site.siteMetadata.year}
        </footer>
    )
}

export default Footer