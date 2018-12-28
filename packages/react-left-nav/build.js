const path = require('path')
const fs = require('fs')
const package = require('./package.json')

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
