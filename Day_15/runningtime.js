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

// Complete the runningTime function below.
function runningTime(arr) {
    
     var count=0;
        for(var j=1;j<arr.length;j++)
        {
            var key=arr[j];
            var i=j-1;
            while((i>-1)&&arr[i]>key)
            {
                arr[i+1]=arr[i];
                i--;
                count++;
            }
            arr[i+1]=key;
           
        }
        return count;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    ws.write(result + "\n");

    ws.end();
}
