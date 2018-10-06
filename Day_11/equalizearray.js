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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    
     var max = 1;
     var map=new Map();
         for(var i in arr){
             if(map.get(arr[i])==null)
                 {
                     map.set(arr[i],1);
                 }
             else
                 {
                     var c=map.get(arr[i]);
                     map.set(arr[i],c+1);
                     if (max <map.get(arr[i]))
                             max = map.get(arr[i]);
                 }       
         }
    return arr.length - max;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
