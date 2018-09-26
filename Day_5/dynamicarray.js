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

// Complete the dynamicArray function below.
function dynamicArray(n, queries) {
    
    
     
        
        
          var ar=[];
          var res=[];
        // ArrayList<ArrayList<Integer>> ar=new ArrayList<ArrayList<Integer>>(n);
         for(var i=0;i<n;i++)
         {
             ar[i]=[];
         }
         var lastAnswer=0;
         for(var j=0;j<queries.length;j++)
         {
             var q1=queries[j][0];
             var q2=queries[j][1];
             var q3=queries[j][2];
              var seq = ((q2 ^ lastAnswer ) % n);
           // ArrayList<Integer> sequence = ar.get(seq);
            
            
            if(q1 == 1){
                 ar[seq].push(q3);
            }
             else{ 
                 var l=ar[seq];
                lastAnswer = l[(q3 % ar[seq].length)];
                res.push(lastAnswer);
            }
             
             
         }
    return res;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nq = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nq[0], 10);

    const q = parseInt(nq[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
