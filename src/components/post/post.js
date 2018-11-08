import React from 'react'
import { TwitterShareButton, FacebookShareButton, LinkedinShareButton } from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitterSquare, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Layout from '../layout/layout'
import ListItem from '../list_page/list_item/list_item'

import './post.scss'

const elaborateBlock = (c) => (
  c.map((l, index) => {
    const line = l.line.map((seg, index) => {
      var segment_actual;
      switch (seg.emphasis) {
        case "bold":
          segment_actual = <strong>{seg.segment}</strong>
          break

        case "italic":
          segment_actual = <i>{seg.segment}</i>
          break

        case "highlight":
          segment_actual = <span className="highlighted_text">{seg.segment}</span>
          break

        case "bold_highlight":
          segment_actual = <strong className="highlighted_text">{seg.segment}</strong>
          break

        case "none":
          segment_actual = <span>{seg.segment}</span>
          break

        default:
          segment_actual = <span />
      }

      return ('link' in seg) ?
        <a key={index} href={seg.link}>{segment_actual}</a> :
        <span key={index}>{segment_actual}</span>


    })

    return (<div key={index} className={`tab-${l.indent}`}>{line}</div>)

  })
)

const elaborateParagraph = (p) => {

  switch (p.type) {
    case "text":
      return (<div className="post_paragraph">{elaborateBlock(p.block)}</div>)

    case "quote":
      return (<div className="quote_block">{elaborateBlock(p.block)}</div>)

    case "code":
      return (<div className="code_block">{elaborateBlock(p.block)}</div>)

    case "image":
      return (<img src={p.src} alt={p.alt} />)

    default:
      return '';
  }

}

const Post = (props) => {

  const content = props.pageContext.data.content
  const header = props.pageContext.header

  console.log(props)

  const paragraphs = content.map((p, index) => (
    <div key={`p-${index}`} className="post_paragraph">{elaborateParagraph(p)}</div>
  ))

  return (
    <Layout pageUrl={props.location.href} pageTitle={header.title} pageDescription={header.abstract} pageImage={header.image}>
      <section className="post_pushdown"></section>
      <section className="container">

        <div className="post_content justify-content-left">
          <ListItem className="post_header justify-content-left" post={header} post_header={true} />
          {paragraphs}
        </div>

        <div className="d-flex social_sharing">
          <TwitterShareButton className="social_sharing_button" url={props.location.href} title={props.pageContext.header.title} via='annexi-strayline' hashtags={props.pageContext.header.topics}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </TwitterShareButton>
          <FacebookShareButton className="social_sharing_button" url={props.location.href} quote={props.pageContext.header.title} via='annexi.strayline'>
            <FontAwesomeIcon icon={faFacebook} />
          </FacebookShareButton>
          <LinkedinShareButton className="social_sharing_button" url={props.location.href} description={props.pageContext.header.title}>
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkedinShareButton>
        </div>
      </section>
    </Layout>
  )

}

export default Post