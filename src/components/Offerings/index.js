import React from 'react'
import PropTypes from 'prop-types'
import IO from '../IO'
import { Container } from '../io-vars';

const Offerings = ({ gridItems }) => (
  <IO className='columns is-multiline' rootMargin="-50px">
    {({ isVisible }) => (
    gridItems.map(item => (
      <Container isVisible={isVisible} key={item.image}
      className='column is-6'
      style={{
         borderRadius: '5px'
       }}>
        <section className='section'>
          <p className='has-text-centered'>
            <img alt='' src={item.image} />
          </p>
          <p>{item.text}</p>
        </section>
      </Container>
    )))}
  </IO>
)

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default Offerings
