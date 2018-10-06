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

// Complete the nonDivisibleSubset function below.
function nonDivisibleSubset(k, s) {
    
     var remainders = [];
    for(var l=0;l<k;l++)
        {
            remainders[l]=0;
        }
    var count = 0;

    // Count the # of numbers that have each remainder
    for (var i = 0; i < s.length; i++) {
        
        var value=s[i]%k;
        remainders[value]=remainders[value]+1;
    }
    console.log(remainders);

    // Get our counts of each category
    for (var j = 1; j <= (k / 2); j++) {            
        // if the remainders are the same (i.e. k / 2),
        // there can be only 1
        if (j == k - j) {
            count++;
            continue;
        }

        // Otherwise, add the remainder with the
        // highest count
        count += Math.max(remainders[j], remainders[k - j]);    
    }

    // If we had one or more evenly divisible numbers,
    // there can be only 1
    if (remainders[0] > 0)
        count++;

    return count;
    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const S = readLine().split(' ').map(STemp => parseInt(STemp, 10));

    let result = nonDivisibleSubset(k, S);

    ws.write(result + "\n");

    ws.end();
}
