#!/usr/bin/env node

'use strict'

const pkg = require('./package.json')

const agartha = require('agartha')

const program = require('commander')

const Commands = require('agartha-cli-commands')

const commands = new Commands()

function before (obj, method, fn) {
  var old = obj[method]
  obj[method] = function () {
    fn.call(this)
    old.apply(this, arguments)
  }
}

// set process title
process.title = 'agartha-cli'

before(program, 'outputHelp', function () {
  this.allowUnknownOption()
})

program
  .version(pkg.version)
  .usage('[options] [op]')

commands.listOptions().forEach(function (option) {
  program.option(option.flag, option.description)
})

commands.listCommands().forEach(function (element) {
  program.command(element.command)
    .description(element.description)
    .action(element.action)
})

program.parse(process.argv)
