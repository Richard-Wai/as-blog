import React from 'react'
import './list_item.scss'

const TopicItem = (props) => (
  <span className="ListItem_topic">
    #{props.topic}
  </span>
)
const listItem = (props) => {

  const post = props.post

  const postTopics = post.topics.map((topic, index) => (
    <TopicItem key={index} topic={topic} />
  ))

  return (
    ('post_header' in props) ?
      <div>
        <h1>{post.title}</h1>
        <hr />
        <div className="author_name">{post.author}</div>
      </div> :

      <div className="blogListItem">
        <h1>{post.title}</h1>
        <hr />
        <h2>{post.abstract}</h2>
        <div className="d-flex topic_list">
          {postTopics}
        </div>
      </div>

  )
}


export default listItem;