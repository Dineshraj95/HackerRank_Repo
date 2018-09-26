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

// Complete the arrayManipulation function below.
function arrayManipulation(n, m,queries) {
     var array1=[n];
    for(var i=0;i<n;i++)
        {
            array1[i]=0;
        }
        for(var i=0;i<m;i++)
        {
            var a=queries[i][0];
            var b=queries[i][1];
            var c=queries[i][2];
        
                 
          for(var j=a-1;j<b;j++)
            {
                array1[j]=array1[j]+c;
            }
        }
        
        var max = array1[0];
        
        for (var j = 1; j < n; j++) {
            
            if(max<array1[j])
            {
                max=array1[j];
            }
        }
        return max;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n,m, queries);

    ws.write(result + "\n");

    ws.end();
}
