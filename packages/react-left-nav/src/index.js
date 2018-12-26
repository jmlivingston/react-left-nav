import DemoNavbar from './components/Demo/DemoNavbar'
import DemoContent from './components/Demo/DemoContent'
import Sidebar from './components/Sidebar/Sidebar'
import SidebarContent from './components/SidebarContent/SidebarContent'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const items = [
  {
    active: true,
    title: 'Home',
    img: <i className="fas fa-home" />
  },
  {
    title: 'Info ABC',
    img: <i className="fas fa-info" />
  },
  {
    title: 'Info XYZ',
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

ReactDOM.render(
  <Fragment>
    <DemoNavbar />
    <Sidebar items={items} />
    <SidebarContent>
      <DemoContent />
    </SidebarContent>
  </Fragment>,
  document.getElementById('app')
)
