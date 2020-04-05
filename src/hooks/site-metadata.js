import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
    const { site: {siteMetadata} } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        name
                        title
                        description
                        phone
                        email
                        siteUrl
                        author
                    }
                }
            }
        `
    );
    return siteMetadata;
};
