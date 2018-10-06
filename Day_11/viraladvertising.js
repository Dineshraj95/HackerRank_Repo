'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    
     var shared=[];
        var liked=[];
        var cumulative=[];
        shared[0]=5;
        liked[0]=2;
        cumulative[0]=2;
        for(var i=1;i<n;i++)
        {
            shared[i]=liked[i-1]*3;
            liked[i]=parseInt(shared[i]/2);
            cumulative[i]=cumulative[i-1]+liked[i];
        }
        return cumulative[n-1];



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = viralAdvertising(n);

    ws.write(result + "\n");

    ws.end();
}
