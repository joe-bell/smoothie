#! /usr/bin/env node
var shell = require('shelljs')

var root = process.env.LERNA_ROOT_PATH
var packageName = process.env.LERNA_PACKAGE_NAME
var recipeName = packageName.replace('@smoothie-css/recipe-', '')

shell.exec('echo "📦  Build: ' + packageName + '"')
shell.exec('yarn build')

shell.exec('echo "🚛  Move: ' + packageName + '"')
shell.exec('mv dist/ ' + root + '/docs/dist/recipes/' + recipeName)

shell.exec('echo "✅  Finished: ' + packageName + '"')
