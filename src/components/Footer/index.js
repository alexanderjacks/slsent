import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Web App from the folks at <a href='https://j4cks.com'>Jacks Consulting</a> | Powered by <a href='https://www.gatsbyjs.org'>Gatsby</a> and <a href='https://www.netlifycms.org'>Netlify CMS</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
