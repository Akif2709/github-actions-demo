const { exec } = require('child_process');
const { run } = require('nx/src/command-line/run');

function run(){
    const {stdout} = exec('node -v')
    console.log(`stdout:\n${stdout}`);
}

run()