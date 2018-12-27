import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import Content from 'react-left-nav/Content'
import DemoContent from './components/DemoContent'
import DemoNavbar from './components/DemoNavbar'
import LeftNav from 'react-left-nav/LeftNav'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

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

const Test = () => (
  <Fragment>
    <DemoNavbar />
    <LeftNav items={items} />
    <Content>
      <DemoContent />
    </Content>
  </Fragment>
)

ReactDOM.render(<Test />, document.getElementById('app'))
