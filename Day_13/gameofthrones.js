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

// Complete the gameOfThrones function below.
function gameOfThrones(s) {
       
       var count=[];
       for(var j=0;j<256;j++)
           {
               count[j]=0;
           }
  
       
        for (var i = 0; i < s.length; i++) 
            count[(s.charCodeAt(i))]++; 

         console.log(count);
        var odd = 0; 
        for (var i = 0; i < 256; i++)  
        { 
        if ((count[i] & 1) == 1) 
            odd++; 

        if (odd > 1) 
            return "NO"; 
        } 

      
        return "YES"; 


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}
