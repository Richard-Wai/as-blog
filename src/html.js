import React from "react"
import PropTypes from "prop-types"

const GoogleTagManager = {
  head: `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PGX8TJH');</script>`,
  body: `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGX8TJH" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`
}

const IubendaCookiePolicy = `<style type="text/css"> #iubenda-cs-banner { bottom: 0px !important; left: 0px !important; position: fixed !important; width: 100% !important; z-index: 99999998 !important; background-color: #171618; } .iubenda-cs-content { display: block; margin: 0 auto; padding: 1em; width: auto; font-family: Helvetica,Arial,FreeSans,sans-serif; font-size: 14px; background: #171618; color: #fff;} .iubenda-cs-rationale { max-width: 900px; position: relative; margin: 0 auto; } .iubenda-banner-content > p { font-family: Helvetica,Arial,FreeSans,sans-serif; line-height: 1.5; } .iubenda-cs-close-btn { margin:0; color: #fff; text-decoration: none; font-size: 1em; position: absolute; top: 0; right: 0; border: none; } .iubenda-cs-cookie-policy-lnk { text-decoration: underline; color: #fff; font-size: 1em; font-weight: 900; } </style> <script type="text/javascript"> var _iub = _iub || []; _iub.csConfiguration = {"cookiePolicyInOtherWindow":true,"lang":"en","siteId":1429332,"localConsentDomain":"*.annexi-strayline.com","cookiePolicyId":36079784, "callback":{ onConsentGiven: function () {dataLayer.push({'event':'iubenda_consent_given'});} }, "banner":{ "prependOnBody":false,"applyStyles":false } }; </script><script type="text/javascript" src="//cdn.iubenda.com/cookie_solution/safemode/iubenda_cs.js" charset="UTF-8" async></script>`

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <div dangerouslySetInnerHTML={{ __html: GoogleTagManager.head }} />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          <div dangerouslySetInnerHTML={{ __html: GoogleTagManager.body }} />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <div dangerouslySetInnerHTML={{ __html: IubendaCookiePolicy }} />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
