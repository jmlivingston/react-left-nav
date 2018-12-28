import PropTypes from 'prop-types'
import React, { useState } from 'react'
import useMediaQuery from './hooks/useMediaQuery'
import styles from './styles'

const LeftNavItem = props => {
  const {
    active,
    activeStyle = styles.leftNavItemActive,
    breakPoints = styles.leftNavItemBreakPoints,
    imageBreakPoints = styles.leftNavItemImageBreakPoints,
    textBreakPoints = styles.leftNavItemTextBreakPoints,
    hoverStyle = styles.leftNavItemHover,
    img,
    onClick = () => {},
    style = styles.leftNavItem,
    title
  } = props

  const [mouseOver, setMouseOver] = useState(false)
  const breakPointStyle = useMediaQuery(breakPoints)
  const imageBreakPointStyle = useMediaQuery(imageBreakPoints)
  const textBreakPointStyle = useMediaQuery(textBreakPoints)

  return (
    <li
      className="left-nav-item"
      key={title}
      onClick={() => onClick(props)}
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      style={{
        ...style,
        ...breakPointStyle,
        cursor: active ? undefined : style.cursor,
        ...(active ? activeStyle : mouseOver ? hoverStyle : style)
      }}
      title={title}>
      {img && (
        <span className="left-nav-item-img" style={imageBreakPointStyle} title={title}>
          {img}
        </span>
      )}
      {title && (
        <span className="left-nav-item-title" style={textBreakPointStyle} title={title}>
          {title}
        </span>
      )}
    </li>
  )
}

LeftNavItem.propTypes = {
  active: PropTypes.bool,
  activeStyle: PropTypes.object,
  breakPoints: PropTypes.object,
  hoverStyle: PropTypes.object,
  imageBreakPoints: PropTypes.object,
  img: PropTypes.any, // TODO
  onClick: PropTypes.func,
  style: PropTypes.object,
  textBreakPoints: PropTypes.object,
  title: PropTypes.string
}

export default LeftNavItem
