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

// Complete the cutTheSticks function below.
function cutTheSticks(sticks) {
    
     sticks.sort(function(a, b){return a - b;});
    var stickNumber=sticks.length;
    var seq = [];
    var seqLength = 0;
    var count = 1;
    for(var i=0; i<stickNumber; i++){
        if(sticks[i] == sticks[i+1]){
            count++;
        }else{
            seq.push(count);
            seqLength++;
            count = 1;
        }
    }
    
    var answers = [];
    var temp = 0;
    for(var i=seqLength-1; i>=0; i--){
        var answer = seq[i] + temp;
        answers.push(answer);
        temp = answer;
    }
    
    answers.sort(function(a,b){
        return b-a;});
    
   return answers;
     


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = cutTheSticks(arr);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
