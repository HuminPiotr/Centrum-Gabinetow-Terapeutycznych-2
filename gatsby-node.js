const path = require(`path`)
const slugify = require("slugify")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/post.js`)

  const result = await graphql(`
    query queryCMSPage {
      articles: allDatoCmsArtykul {
        nodes {
          id
          tytul
        }
      }
    }
  `)

  // Create blog post pages.
  result.data.articles.nodes.forEach(post => {
    const slugifiedTitle = slugify(post.tytul, { lower: true })

    createPage({
      // Path for this page — required
      path: `blog/${slugifiedTitle}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    })
  })

  //Create blog-list pages
  const blogListTemplate = path.resolve(`src/layouts/blog.js`)
  const posts = result.data.articles.nodes
  const postsPerPage = 12
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
