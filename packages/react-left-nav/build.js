const fs = require('fs')
const package = require('./package.json')
const path = require('path')

const copyPackageJson = () => {
  const newPackage = {
    name: 'react-left-nav',
    version: package.version,
    description: package.description,
    peerDependencies: package.peerDependencies,
    author: package.author,
    license: package.license,
    repository: package.repository,
    keywords: package.keywords
  }

  fs.writeFileSync(path.join(__dirname, 'lib/package.json'), JSON.stringify(newPackage, null, 2) + '\r')
}

const copyReadMe = () => {
  fs.copyFileSync(path.join(__dirname, '../../README.md'), path.join(__dirname, 'lib/README.md'))
}

copyPackageJson()
copyReadMe()
