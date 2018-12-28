import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import './LeftNavItems.css'

class LeftNavItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { mouseOver: false }
  }
  render() {
    return (
      <li
        key={this.props.title}
        className={`left-nav-item${this.props.active ? ' active' : ''}`}
        style={{
          background: this.state.mouseOver || this.props.active ? this.props.style.hover : this.props.style.background,
          borderBottom: this.props.style.borderBottom,
          cursor: this.props.style.cursor
        }}
        onMouseOver={() => this.setState({ mouseOver: true })}
        onMouseOut={() => this.setState({ mouseOver: false })}>
        {this.props.img && this.props.img}
        {this.props.title && <span className="left-nav-item-title">{this.props.title}</span>}
      </li>
    )
  }
}

LeftNavItem.propTypes = {
  active: PropTypes.bool,
  img: PropTypes.any, // TODO
  style: PropTypes.object,
  title: PropTypes.string
}

const LeftNavItems = ({
  items = [],
  itemStyle = {
    background: '#343a40',
    borderBottom: '1px solid #495057',
    cursor: 'pointer',
    hover: '#495057'
  }
}) => (
  <ul className="left-nav-items">
    {items.map(item => (
      <LeftNavItem key={item.title} {...item} style={itemStyle} />
    ))}
  </ul>
)

LeftNavItems.propTypes = {
  items: PropTypes.array, // TODO: ADD shape
  itemStyle: PropTypes.object
}

export default LeftNavItems
