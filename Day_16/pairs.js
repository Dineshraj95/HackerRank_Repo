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

// Complete the pairs function below.
    function binarySearch( arr,low,  
                               high,x) 
    { 
        if (high >= low)  
        { 
            var mid = parseInt(low + (high - low) / 2); 
            if (x == arr[mid]) 
                return mid; 
            if (x > arr[mid]) 
                return binarySearch(arr, (mid + 1), 
                                          high, x); 
            else
                return binarySearch(arr, low,  
                                    (mid - 1), x); 
        } 
        return -1; 
    } 
    
    function pairs( k, arr) 
    { 
        var count = 0, i; 
        var n=arr.length;
          
       
        arr.sort(function(a,b)
                 {
            return a-b
        }); 
  
      
        for (i = 0; i < n - 1; i++) 
            if (binarySearch(arr, i + 1, n - 1, 
                             arr[i] + k) != -1) 
                count++; 
  
        return count; 
    } 


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = pairs(k, arr);

    ws.write(result + "\n");

    ws.end();
}
