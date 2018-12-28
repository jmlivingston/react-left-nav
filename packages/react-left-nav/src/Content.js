import PropTypes from 'prop-types'
import React from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import styles from './styles'

const Content = ({ children, style = {}, breakPoints = styles.contentBreakPoints }) => {
  const breakPointStyle = useMediaQuery(breakPoints)
  return <div style={{ ...breakPointStyle, ...style }}>{children}</div>
}

Content.propTypes = {
  breakPoints: PropTypes.array,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  style: PropTypes.object
}

export default Content
