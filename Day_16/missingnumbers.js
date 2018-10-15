'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the missingNumbers function below.
function missingNumbers(arr, brr) {
    
     var hm=new Map();
        for(var i=0;i<arr.length;i++)
        {
            if(hm.get(arr[i])!=null)
            {
                var value=hm.get(arr[i]);
              
                hm.set(arr[i],value+1);
            }
            else
            {
                hm.set(arr[i],1);
            }
        }
        for(var j=0;j<brr.length;j++)
        {
            if(hm.get(brr[j])!=null)
            {
                var value=hm.get(brr[j]);
               
                hm.set(brr[j],value-1);
                    
                
            }
            else{
                hm.set(brr[j],1);
            }
        }
        
        //System.out.println(hm);
       var ar=Array.from(hm);
    var res=[];
        for(var m=0;m<ar.length;m++)
        {
            var arr1=ar[m];
            var key=arr1[0];
            var value=arr1[1];
            if(value!=0)
            {
                res.push(key);
            }
        }
       res.sort(function(a,b)
               {
           return a-b;
       });
        return res;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
