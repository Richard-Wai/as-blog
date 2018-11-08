import React from 'react'
import Helmet from 'react-helmet'
import AS_Logo from '../../assets/annexi-strayline-blue.svg'
import './layout.scss'

const Layout = (props) => {

  return (
    <div id="mainbody">
      <header>
        <Helmet>
          <title>ANNEXI-STRAYLINE Blog: {props.pageTitle}</title>
          <link rel="canonical" href={props.pageUrl} />
          <meta property="og:url" content={props.pageUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={props.pageTitle} />
          <meta property="og:description" content={props.pageDescription} />
          <meta property="og:image" content={props.pageImage} />
          <meta property="og:locale" content="en" />
          <meta property="og:site_name" content="ANNEXI-STRAYLINE Blog" />
          <meta property="twitter:site" content="@AnnexiStrayline" />
        </Helmet>
      </header>
      <nav className="navbar navbar-dark border-bottom border-white">
        <div className="container">
          <a href="https://annexi-strayline.com/" className="navbar-brand">
            <img src={AS_Logo} height="35" alt="ANNEXI-STRAYLINE"></img>
          </a>
          <div className="header-text text-white">Blog</div>
        </div>
      </nav>
      <div id="content_area">{props.children}</div>
      <footer>
        <div className="container">
          <span className="mr-3">ANNEXI-STRAYLINE Trans-Human Ltd.</span>
          <span className="mr-5">Copyright &copy;
            <span id="year">{new Date().getFullYear()}</span>
          </span>
        </div>
      </footer>
    </div>
  )

}

export default Layout;