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

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    
        a.sort(function(a, b){return a - b});
        var max=0;
        var result=0;
       var ar1=[];
        ar1.push(a[0]);
        for(var i=0;i<a.length-1;i++)
        {
            
            if(ar1.length==0)
            {
                ar1.push(a[i]);
            }
             var temp=ar1[0];
           
            if(a[i+1]==temp)
            {
                ar1.push(a[i+1]);
            }
            else
            {
                if(temp!=a[i+1]&&a[i+1]-temp==1)
                 {
                ar1.push(a[i+1]);
                }
               if(temp!=a[i+1]&&a[i+1]-temp>1)
               {
                   result=ar1.length;
                   if(max<result)
                   {
                       max=result;
                   }
                   ar1=[];
               }   
         }
        }
        result=ar1.length;
        if(max<result)
        {
            max=result;
        }
         return max;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
