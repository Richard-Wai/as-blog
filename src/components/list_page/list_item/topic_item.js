import React from 'react'
import './list_item.scss'


export default (props) => {

  return (
    <span className="ListItem_topic" onClick={(event) => {
      event.stopPropagation();
      props.SelectTopic(props.topic)
    }}>
      #{props.topic}
    </span>);
};