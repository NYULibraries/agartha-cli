#!/usr/bin/env node

'use strict';

const program = require('commander');

const pkg = require('./package.json');

const Commands = require('agartha-cli-commands');

const commands = new Commands();

/**
 * Install a before function; AOP.
 */
function before (obj, method, fn) {
  var old = obj[method];
  obj[method] = function () {
    fn.call(this);
    old.apply(this, arguments);
  };
}

// set process title
process.title = 'agartha';

before(program, 'outputHelp', function () {
  this.allowUnknownOption();
});

program
  .version(pkg.version)
  .usage('[options] [op]');
  
commands.listCommands().forEach(function(element) {
  program.command(element.command)
  element.options.forEach(function(option) {
    program.option(option.flag, option.description)
  });
  program.command(element.command)
    .description(element.description)
    .action(element.action)
});

program.parse(process.argv);
