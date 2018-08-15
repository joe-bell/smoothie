#! /usr/bin/env node
var shell = require('shelljs')

shell.exec('echo 🚿  Cleaning')
shell.exec('rm -rf docs/dist/recipes')

shell.exec('echo 🎬  Starting Build')
shell.exec('mkdir -p docs/dist/recipes')
