# Responsive React Left Nav

> Warning: This is a placeholder for a future library and uses an alpha version of React. Do not use in production and use at your own risk.

## Minimal Example

> Note: This uses create-react-app, Bootstrap, prop-types, and FontAwesome, but none of these are dependencies.

1. Create an app with create-react-app

```bash
create-react-app my-app
```

2. Add Dependencies

```
yarn add bootstrap react-left-nav @fortawesome/fontawesome-free prop-types react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2
```

3. Copy and paste the following into index.js

```javascript
import React, { Suspense, lazy, useState } from 'react'
import ReactDOM from 'react-dom'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const Content = lazy(() => import('react-left-nav/Content'))
const DemoContent = lazy(() => import('./components/DemoContent'))
const DemoHeader = lazy(() => import('./components/DemoHeader'))
const LeftNav = lazy(() => import('react-left-nav/LeftNav'))
const LeftNavItem = lazy(() => import('react-left-nav/LeftNavItem'))
const LeftNavItems = lazy(() => import('react-left-nav/LeftNavItems'))

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

  return (
    <Suspense fallback={null}>
      <DemoHeader />
      <LeftNav style={{ top: headerSize }}>
        <LeftNavItems>
          {items.map((item, index) => {
            return <LeftNavItem key={item.title} {...item} onClick={() => setActive(item.id)} />
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
```

4. Create a DemoHeader component

```javascript
import React from 'react'

const DemoHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Link
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}

export default DemoHeader
```

5. Create a DemoContent component

```javascript
import React, { Fragment } from 'react'

const DemoContent = () => {
  return (
    <Fragment>
      <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Pricing</h1>
        <p className="lead">
          Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built
          with default Bootstrap components and utilities with little customization.
        </p>
      </div>
      <div className="container">
        <div className="card-deck mb-3 text-center">
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 users included</li>
                <li>2 GB of storage</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-dark">
                Sign up for free
              </button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $15 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>20 users included</li>
                <li>10 GB of storage</li>
                <li>Priority email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-dark">
                Get started
              </button>
            </div>
          </div>
          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $29 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>30 users included</li>
                <li>15 GB of storage</li>
                <li>Phone and email support</li>
                <li>Help center access</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-dark">
                Contact us
              </button>
            </div>
          </div>
        </div>

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src="/docs/4.2/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
              <small className="d-block mb-3 text-muted">© 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Cool stuff
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Random feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Team feature
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Stuff for developers
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another one
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Resource name
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Another resource
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <a className="text-muted" href="/">
                    Team
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Locations
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-muted" href="/">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default DemoContent
```
