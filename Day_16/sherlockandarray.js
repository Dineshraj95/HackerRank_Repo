'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the balancedSums function below.
function balancedSums(ar) {
    
    var sumleft=0;
        var sumright=0;
        for(var j=0;j<ar.length;j++)
        {
            sumright+=ar[j];
        }
        var flag=0;
        for(var i=0;i<ar.length;i++)
        {
          
            if(sumleft==(sumright-ar[i]))
            {
                flag=1;
                break;
            }
            else
            {
                sumleft+=ar[i];
                sumright-=ar[i];
            }
        }
               if(flag==1)
               {
                   return "YES";
               }
               else
               {
                   return "NO";
               }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
