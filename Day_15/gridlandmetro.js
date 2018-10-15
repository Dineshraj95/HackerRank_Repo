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

// Complete the gridlandMetro function below.
function gridlandMetro(n, m, k, track) {
    
    
       var res=[n];
        for(var i=0;i<n;i++)
        {
             res[i]=[m];
            for(var j=0;j<m;j++)
            {
                res[i][j]=1;
            }
        }
        for(var i=0;i<k;i++)
        {
                var row=track[i][0];
                var column1=track[i][1];
                var column2=track[i][2];
                for(var l=column1-1;l<column2;l++)
                {
                    if(res[row-1][l]==0)
                    {
                        res[row-1][l]=0;
                    }
                    else
                    {
                    res[row-1][l]-=1;
                    }
                }     
        }
        var sum=0;
        for(var i=0;i<n;i++)
        {
            for(var j=0;j<m;j++)
            {
                sum+=res[i][j];
            }
        }
        return sum;

    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nmk = readLine().split(' ');

    const n = parseInt(nmk[0], 10);

    const m = parseInt(nmk[1], 10);

    const k = parseInt(nmk[2], 10);

    let track = Array(k);

    for (let i = 0; i < k; i++) {
        track[i] = readLine().split(' ').map(trackTemp => parseInt(trackTemp, 10));
    }

    let result = gridlandMetro(n, m, k, track);

    ws.write(result + "\n");

    ws.end();
}
