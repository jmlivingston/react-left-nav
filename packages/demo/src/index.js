import React, { lazy, Suspense, useState } from 'react'
import ReactDOM from 'react-dom'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Content = lazy(() => import('react-left-nav/Content'))
const DemoContent = lazy(() => import('./components/DemoContent'))
const DemoHeader = lazy(() => import('./components/DemoHeader'))
const LeftNav = lazy(() => import('react-left-nav/LeftNav'))
const LeftNavItems = lazy(() => import('react-left-nav/LeftNavItems'))
const LeftNavItem = lazy(() => import('react-left-nav/LeftNavItem'))

const Demo = () => {
  const [active, setActive] = useState(0)

  const items = [
    {
      active: active === 0,
      id: 0,
      title: 'Home',
      img: <i className="fas fa-home" />
    },
    {
      active: active === 1,
      id: 1,
      title: 'Info',
      img: <i className="fas fa-info" />
    },
    {
      active: active === 2,
      id: 2,
      title: 'Archives',
      img: <i className="fas fa-archive" />
    },
    {
      active: active === 3,
      id: 3,
      title: 'About',
      img: <i className="fas fa-question" />
    },
    {
      active: active === 4,
      id: 4,
      title: 'Contact',
      img: <i className="fas fa-user" />
    }
  ]

  const headerSize = 56

  //
  return (
    <Suspense fallback={null}>
      <DemoHeader />
      <LeftNav style={{ top: headerSize }}>
        <LeftNavItems>
          {items.map((item, index) => {
            return <LeftNavItem key={item.title} {...item} onClick={() => setActive(item.id)} />
            // return (
            //   <li key={item.title}>
            //     <div onClick={() => setActive(item.id)}>{item.title}</div>
            //   </li>
            // )
          })}
        </LeftNavItems>
      </LeftNav>
      <Content style={{ marginTop: headerSize }}>
        <DemoContent />
      </Content>
    </Suspense>
  )
}

ReactDOM.render(<Demo />, document.getElementById('app'))
