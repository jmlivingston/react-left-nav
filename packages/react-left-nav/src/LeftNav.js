import PropTypes from 'prop-types'
import React from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import styles from './styles'

const LeftNav = ({ children, style = {}, breakPoints = styles.leftNavBreakPoints }) => {
  style = { ...styles.leftNav, ...style }
  const breakPointStyle = useMediaQuery(breakPoints)
  return (
    <nav className="left-nav" style={{ ...style, ...breakPointStyle }} role="navigation">
      {children}
    </nav>
  )
}

LeftNav.propTypes = {
  breakPoints: PropTypes.object,
  children: PropTypes.element,
  style: PropTypes.object
}

export default LeftNav
