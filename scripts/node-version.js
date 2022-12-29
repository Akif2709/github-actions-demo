#!/usr/bin/env node

const { exec } = require('node:child_process');

async function runScript() {
    console.log('Logging from the "node-versions.js" script file..')
  await exec('node -v', (error, stdout) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

runScript();
