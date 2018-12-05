import React from 'react';
import './list_page.scss';

export default ({ filter, DeselectTopic }) => {
  return (
    <div className="filter_topic">
      <h3 onClick={event => {
        event.stopPropagation();
        DeselectTopic(filter);
      }}>#{filter}</h3>
    </div>
  )
};