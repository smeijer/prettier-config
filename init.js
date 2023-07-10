#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const cwd = process.cwd();

const filepath = path.join(cwd, '.prettierrc.cjs');
const template = `module.exports = require('@smeijer/prettier-config');`;

if (fs.existsSync(filepath)) {
  console.log('prettier config already exists');
  process.exit(1);
}

fs.writeFileSync(filepath, template, 'utf-8');
console.log(`created ${path.relative(cwd, filepath)}`);
