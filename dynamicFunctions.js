'use strict;'
const vm = require('vm')

module.exports = {
  set, get, call
}

const functions = {}

function set(name, code) {
  functions[name] = new vm.Script(`(module=>{'use strict';${code};return module})({}).exports`, { filename: `dynamicFunctions:${name}` })
}

function call(name, ...args) {
  get(name).apply()
}

function get(name) {
  if (functions[name])
    return functions[name].runInNewContext()
  else
    throw new Error(`No such dynamic function defined: ${name}`)
}