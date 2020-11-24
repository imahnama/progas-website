// import React from 'react';
// import { Helmet } from 'react-helmet';
// import { useStaticQuery, graphql } from 'gatsby';
//
// export const Seo = ({description, keywords, title, image, url, author}) => {
//   return (
//     <StaticQuery
//       query={detailsQuery}
//       render={data => {
//             const metaDescription = description || data.site.siteMetadata.metaDescription
//             const metaTitle = title || data.site.siteMetaData.Title
//         const metaAuthor = author || data.site.siteMetadata.url
//         const metaUrl = url || data.site.siteMetadata.url
//         const metaImage = image || data.site.siteMetadata.image
//         const metaKeywords = keywords || [ "Kenyan","Best" , "Close", "Near", "Good", CustomerService", Gas", LPG", "Liquid", "Petroleum", "Petrol", "Energy", "Cooking", "Cookstove", "Cooktop", "Homecooking", "Homecooked", "Ingredients", "Meal", "Prepare", "Feed", "Burner", "Cylinder", "Regulator", "Hose", "Grill", "Free", "Fast", "Quick", "Pipe", "Fire"]
//
//         return (
//           <Helmet
//           title={title}
//           meta={[
//             {
//               name: `description`,
//               content: metaDescription,
//             },
//             {
//               property: `og:title`,
//               content: metaTitle,
//             },
//             {
//               property: `og:description`,
//               content: metaDescription,
//             },
//             {
//               property: `og:type`,
//               content: `website`,
//             },
//             {
//               property: `og:image`,
//               content: metaImage,
//             },
//             {
//               property: `og:url`,
//               content: metaUrl,
//             },
//             {
//               property: `twitter:card`,
//               content: `summary_large_image`,
//             },
//             {
//               property: `twitter:creator`,
//               content: metaAuthor,
//             },
//             {
//               property: `twitter:title`,
//               content: metaTitle,
//             },
//             {
//               property: `twitter:description`,
//               content: metaDescription,
//             },
//             {
//               property: `twitter:image`,
//               content: metaImage,
//             },
//           ].concat(
//             metaKeywords && metaKeywords.length > 0 ? {
//               name: `keywords`,
//               content: metaKeywords.join(`, `),
//             } : []
//           )
//         }
//         />
//         )
//       }}
//       />
//   )
// }
//
// const detailsQuery = graphql `
//    query DefaulySEOQuery {
//      site{
//        siteMetaData {
//          title
//          description
//          author
//          image
//        }
//      }
//    }
// `
