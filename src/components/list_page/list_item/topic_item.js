import React from 'react'
import './list_item.scss'

/* eslint-disable */

export default (props) => {

  return (
    <span className="ListItem_topic" onClick={(event) => {
      event.preventDefault();
      event.stopPropagation();
      props.SelectTopic(props.topic)
    }}>
      #{props.topic}
    </span>);
};