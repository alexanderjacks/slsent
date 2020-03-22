import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='hero is-primary is-bold is-medium footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
          Web App from the folks at <a href='https://j4cks.com'>Jacks Consulting</a>&nbsp;||&nbsp;
          <strong>
            {config.copyright}
          </strong>
          </p>
          <p>
          <strong>Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a></strong>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
