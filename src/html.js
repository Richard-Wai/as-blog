import React from "react"
import PropTypes from "prop-types"

const GoogleTagManager = {
  head: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7Z9YVD98V"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);} gtag('js', new Date());  gtag('config', 'G-Z7Z9YVD98V');</script>`,
  body: ``
}

const IubendaCookiePolicy = `<script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"cookiePolicyInOtherWindow":true,"countryDetection":true,"enableFadp":true,"enableLgpd":true,"enableUspr":true,"floatingPreferencesButtonCaptionColor":"#FFFFFF80","floatingPreferencesButtonColor":"#FFFFFF1C","floatingPreferencesButtonDisplay":"bottom-left","floatingPreferencesButtonIcon":false,"lang":"en","localConsentDomain":"*.annexi-strayline.com","preferenceCookie":{"expireAfter":180},"siteId":1429332,"storage":{"useSiteId":true},"usPreferencesWidgetDisplay":"inline-center","cookiePolicyId":36079784,"floatingPreferencesButtonCaption":true,"banner":{"acceptButtonDisplay":true,"closeButtonRejects":true,"customizeButtonDisplay":true,"position":"bottom","slideDown":false}};
</script>
<script type="text/javascript" src="https://cs.iubenda.com/autoblocking/1429332.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`

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
          <div dangerouslySetInnerHTML={{ __html: IubendaCookiePolicy }} />
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
