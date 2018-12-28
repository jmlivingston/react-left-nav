import PropTypes from 'prop-types'
import React from 'react'
import './Content.css'

const Content = ({ children }) => {
  return <div className="content">{children}</div>
}

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}

export default Content
