import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
// import './LeftNav.css'
import './LeftNav.css'

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
          ...this.props.styles.styles,
          background: this.state.mouseOver ? this.props.styles.hover : this.props.styles.styles.background
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
  styles: PropTypes.object,
  title: PropTypes.string
}

const LeftNav = ({
  items = [],
  styles = {
    leftNav: {
      styles: {
        background: '#343a40',
        boxShadow: 'inset -5px 0 5px -5px #fff',
        // backgroundHover: '',
        // borderColor: '',
        color: '#dee2e6'
      },
      hover: ''
    },
    leftNavItem: {
      styles: {
        background: '#343a40',
        borderBottom: '1px solid #495057',
        cursor: 'pointer'
        // '&:active': {
        //   backgroundColor: 'red'
        // },
        // '&:hover': {
        //   backgroundColor: 'red'
        // }
      },
      hover: '#495057'
    }
  }
}) => (
  <nav className="left-nav" style={{ ...styles.leftNav }}>
    <ul>
      {items.map(item => (
        <LeftNavItem key={item.title} {...item} styles={{ ...styles.leftNavItem }} />
      ))}
    </ul>
  </nav>
)

LeftNav.propTypes = {
  items: PropTypes.array, // TODO: ADD shape
  styles: PropTypes.object
}

export default LeftNav
