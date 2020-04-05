/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useSiteMetadata } from "@hooks"

export const SEO = ({ description, lang, meta, title, keywords }) => {
  const siteMetadata = useSiteMetadata()
  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.name}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: siteMetadata.title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: siteMetadata.name,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `)
            }
          : []
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `es`,
  meta: [{}],
  keywords: ['cv', 'Alejandro Llorente', 'gatsby', 'desarrollador web', 'js', 'javascript', 'frontend', 'maquetador web', 'web', 'Reactjs' ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
