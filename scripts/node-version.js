const { exec } = require('child_process');

function runScript(){
    console.log('akif')
    const {stdout} = exec('node -v')
    console.log(`stdout:\n${stdout}`);
}

runScript()