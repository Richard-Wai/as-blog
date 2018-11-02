import React from 'react'
import Helmet from 'react-helmet'
import AS_Logo from '../../assets/annexi-strayline-blue.svg'
import './layout.scss'

const Layout = ({ children }) =>
  (
    <div id="mainbody">
      <header>
        <Helmet>
          <title>ANNEXI-STRAYLINE Blog </title>
        </Helmet>
      </header>
      <nav className="navbar navbar-dark border-bottom border-white">
        <div className="container">
          <a href="https://bta.annexi-strayline.com/" className="navbar-brand">
            <img src={AS_Logo} height="35" alt="ANNEXI-STRAYLINE"></img>
          </a>
          <div className="header-text text-white">Blog</div>
        </div>
      </nav>
      <div id="content_area">{children}</div>
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

export default Layout;