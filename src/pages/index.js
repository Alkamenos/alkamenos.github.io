import React from "react"

import {graphql, useStaticQuery} from "gatsby"
import {useIntl} from "gatsby-plugin-intl"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => {
	const intl = useIntl()
	const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "screen.png" }) {
        id
        childImageSharp {
          fixed(width: 1040) {
            src
          }
        }
      }
    }
  `)

	return (
		<Layout>
			<SEO
				lang={intl.locale}
				title={intl.formatMessage({id: "pages.index"})}
				keywords={[`developer`, `front-end developer`, `react developer`]}
				image={data.file.childImageSharp.fixed.src}
			/>
			<Header siteTitle={intl.formatMessage({id: "title"})}/>
			<div className="bg-white dark:bg-gray-900">
				<Hero/>
			</div>
		</Layout>
	)
}

export default IndexPage
