import '@fortawesome/fontawesome-free/css/all.min.css'
import React, { Fragment, lazy, Suspense, useState } from 'react'
import { render } from 'react-dom'
import './index.css'

const Content = lazy(() => import('../../src/Content'))
const LeftNav = lazy(() => import('../../src/LeftNav'))
const LeftNavItem = lazy(() => import('../../src/LeftNavItem'))
const LeftNavItems = lazy(() => import('../../src/LeftNavItems'))

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

  const headerSize = 0

  const RandomContent = () => (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  )

  return (
    <Suspense fallback={null}>
      <LeftNav style={{ top: headerSize }}>
        <LeftNavItems>
          {items.map((item, index) => (
            <LeftNavItem key={item.title} {...item} onClick={() => setActive(item.id)} />
          ))}
        </LeftNavItems>
      </LeftNav>
      <Content style={{ marginTop: headerSize }}>
        <div className="content-inner">
          <h1>I am some Content</h1>
          <RandomContent />
          {Array.apply(null, { length: 100 }).map((item, index) => (
            <Fragment key={index}>
              <h2>Even more Content {index}</h2>
              <RandomContent />
            </Fragment>
          ))}
        </div>
      </Content>
    </Suspense>
  )
}

render(<Demo />, document.querySelector('#demo'))
