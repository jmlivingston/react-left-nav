import PropTypes from 'prop-types'
import React from 'react'
import './LeftNav.css'
import styles from './Styles'

const LeftNav = ({ children, style = styles.leftNav }) => (
  <nav className="left-nav" style={{ ...style }}>
    {children}
  </nav>
)

LeftNav.propTypes = {
  children: PropTypes.element,
  style: PropTypes.object
}

export default LeftNav
