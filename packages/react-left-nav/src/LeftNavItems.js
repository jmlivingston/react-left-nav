import PropTypes from 'prop-types'
import React from 'react'
import styles from './Styles'

const LeftNavItems = ({ children }) => (
  <ul className="left-nav-items" style={styles.leftNavItems}>
    {children}
  </ul>
)

LeftNavItems.propTypes = {
  children: PropTypes.array // TODO: ADD shape
}

export default LeftNavItems
