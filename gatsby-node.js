const postIndex = require('./src/posts/index.json')

exports.createPages = async ({ actions: { createPage } }) => {
  const posts = postIndex.index

  // Generate the static index pages. Start with "index"
  createPage({
    path: `/blog/`,
    component: require.resolve('./src/components/list_page/list_page.js'),
    context: { posts },
  })

  // Generate a page for each post
  posts.forEach(post => {

    var data = require(`./src/posts/${post.sequence}.json`)

    createPage({
      path: `/blog/posts/${post.sequence}`,
      component: require.resolve('./src/components/post/post.js'),
      context: { data, header: post }
    })
  })

}