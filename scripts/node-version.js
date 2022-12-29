const { exec } = require('child_process');
const { run } = require('nx/src/command-line/run');

function runScript(){
    console.log('akif')
    const {stdout} = exec('node -v')
    console.log(`stdout:\n${stdout}`);
}

runScript()