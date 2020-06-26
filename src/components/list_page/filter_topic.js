import React from 'react';
import './list_page.scss';

/* eslint-disable */

export default ({ filter, DeselectTopic }) => {
  return (
    <div className="filter_topic" onClick={event => {
      event.stopPropagation();
      DeselectTopic(filter);
    }}>
      <h3>#{filter}</h3>
    </div>
  )
};