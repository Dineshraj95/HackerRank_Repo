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

// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) {
    
     var tr=new Set();
        var ar=[]
      
        for(var i=0;i<scores.length;i++)
        {
            
                tr.add(scores[i]);
            
        }
        var tr1=Array.from(tr);
      // console.log(tr1);
        for(var j=0;j<alice.length;j++)
        {
            if(tr1.includes(alice[j]))
            {
                var index=tr1.indexOf(alice[j]);
                ar.push(index+1);
                tr1.sort(function(a,b){return b-a;});
               
            }
            else{
                tr1.push(alice[j]);
                tr1.sort(function(a,b){return b-a;});
                 var index=tr1.indexOf(alice[j]);
                ar.push(index+1);
               
              
            }
            
        }
    console.log(tr1);
          var result=[];
        for(var l=0;l<ar.length;l++)
        {
            result[l]=ar[l];
        }
        return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
