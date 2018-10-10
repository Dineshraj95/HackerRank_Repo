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

// Complete the caesarCipher function below.
function caesarCipher(str, k1) {
    
        var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lower = "abcdefghijklmnopqrstuvwxyz";
      
        var k=0;
        var res="";
        while(k<str.length)
        {
            var i = str[k];
            if(upper.indexOf(i) != -1)
            {
               res+=upper[(upper.indexOf(i) + k1) % upper.length];
            }
            else if(lower.indexOf(i) != -1)
            {
               res+=lower[(lower.indexOf(i) + k1) % lower.length];
            }
            else
            {
                res+=i;
            }
            
            k++;
        }
       return res;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}
