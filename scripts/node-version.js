#!/usr/bin/env node

const shell = require('shelljs');

function runScript(){
    console.log('akif')
    const {stdout} = shell.exec('node -v', {silent:true})
    console.log(stdout)
}

runScript()