import { useStaticQuery, graphql } from "gatsby"

export const useImageAvatar = () => {
  const {
    placeholderImage: { childImageSharp },
  } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "imgAbout.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return childImageSharp
}
