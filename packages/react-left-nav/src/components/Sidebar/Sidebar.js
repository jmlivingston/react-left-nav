import PropTypes from 'prop-types'
import React from 'react'
import './Sidebar.scss'

const Sidebar = ({ items = [] }) => (
  <nav className="sidebar">
    <ul>
      {items.map(item => (
        <li key={item.title} className={`sidebar-item${item.active ? ' active' : ''}`}>
          {item.img && item.img}
          {item.title && <span className="sidebar-item-title">{item.title}</span>}
        </li>
      ))}
    </ul>
  </nav>
)

Sidebar.propTypes = {
  items: PropTypes.array // TODO: ADD shape
}

export default Sidebar
