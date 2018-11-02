import React from 'react'
import Layout from '../layout/layout'
import ListItem from './list_item/list_item'
import './list_page.scss'

const ListPage = (props) => {
  const posts = ('posts' in props) ? props.posts : props.pageContext.posts

  const postItems = posts.map((post) => (
    <ListItem key={post.sequence} post={post} />
  ))

  return (
    <Layout>
      <div className="push_down"></div>
      <div id='article_list' className="container">
        {postItems}
      </div>
    </Layout>
  )
}

export default ListPage