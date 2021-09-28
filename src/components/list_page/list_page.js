import React, { Component } from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import ListItem from './list_item/list_item'
import FilterTopic from './filter_topic'
import './list_page.scss'



class ListPage extends Component {

  constructor(props) {
    super(props)

    const posts = ('posts' in props) ? props.posts : props.pageContext.posts;
    const filter = ('filter' in props) ? props.filter : { startIndex: 1 };

    this.state = { posts, filter };
  }

  SelectTopic(topic) {
    this.setState(state => {
      if (typeof state.filter.topics !== 'undefined') {

        const scan_filters = state.filter.topics.filter(check => {
          return (check === topic);
        })

        if (scan_filters.length > 0) return state;
        // Already added

        state.filter.topics.push(topic);
        return {
          posts: state.posts,
          filter: state.filter
        };
      }
      else {
        return {
          posts: state.posts,
          filter: {
            startIndex: state.filter.startIndex,
            topics: [topic]
          }
        }
      }
    })
  }

  DeselectTopic(topic) {
    this.setState(state => {
      if (typeof state.filter.topics !== 'undefined') {
        const new_topics = state.filter.topics.filter(activeTopic => {
          return (activeTopic !== topic);
          // Keep everything but the topic we were given!
        });

        return (new_topics.length > 0) ?
          {
            posts: state.posts,
            filter: {
              startIndex: state.filter.startIndex,
              topics: new_topics
            }
          }
          :
          {
            posts: state.posts,
            filter: {
              startIndex: state.filter.startIndex
            }
          };

      }
      else {
        return {
          posts: state.posts,
          filter: {
            startIndex: state.filter.startIndex
          }
        }
      }
    });
    console.log(this.state);
  }


  render() {

    const Filters = ({ filterList }) => {
      return (filterList.map(filter => (
        <FilterTopic key={'f-' + filter} filter={filter} DeselectTopic={topic => this.DeselectTopic(topic)} />)
      ))
    }

    const filter = this.state.filter;
    const startIndex = this.state.filter.startIndex;

    var finalPosts;
    const filterTopics = (typeof filter.topics !== 'undefined') ? filter.topics : null;


    finalPosts = this.state.posts.filter(post => {
      if (post.sequence < startIndex) return false;
      if (filterTopics == null) return true;

      const topicMatch = post.topics.filter((topic) => {
        const match = filterTopics.filter((ftopic) => (
          (ftopic === topic) ? true : false)
        )

        return (match.length > 0) ? true : false;
      })


      return ((topicMatch.length > 0) ? true : false);

    })

    const filterBar = (filterTopics == null) ?
      null :
      (
        <span className="blogFilters">
          <h3>Filtering by: </h3>
          <Filters filterList={filterTopics} />
        </span>
      );

    const postItems = finalPosts.reverse().map((post) => (
      <Link to={'/blog/posts/' + post.sequence} key={post.sequence}>
        <ListItem post={post}
          SelectTopic={topic => this.SelectTopic(topic)} />
      </Link>
    ));

    return (
      <Layout pageUrl={this.props.location.href} pageTitle="ANNEXI-STRAYLINE Blog" pageDescription="ANNEXI-STRAYLINE Blog Index">
        <div className="push_down"></div>
        <div id="article_list" className="container">
          <div>{filterBar}</div>
          <div>{postItems}</div>
        </div>
      </Layout>
    );
  }
}

export default ListPage;