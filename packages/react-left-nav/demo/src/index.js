import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import Content from '../../src/Content'
import LeftNav from '../../src/LeftNav'

const items = [
  {
    active: true,
    title: 'Home',
    img: <i className="fas fa-home" />
  },
  {
    title: 'InfoABC',
    img: <i className="fas fa-info" />
  },
  {
    title: 'InfoXYZ',
    img: <i className="fas fa-archive" />
  },
  {
    title: 'About',
    img: <i className="fas fa-question" />
  },
  {
    title: 'Contact',
    img: <i className="fas fa-user" />
  }
]

class Demo extends Component {
  render() {
    return (
      <Fragment>
        <LeftNav items={items} />
        <Content>test</Content>
      </Fragment>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
