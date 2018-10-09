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

// Complete the encryption function below.
function encryption(s) {
    
      var length=s.length;
        var ceil=parseInt(Math.ceil(Math.sqrt(length)));
        //int floor=(int)(Math.floor(Math.sqrt(length)));
   
        var res="";
        for(var i=0;i<ceil;i++)
        {
            for(var j=i;j<length;j=j+ceil)
            {
                res+=s[j];
            }
            res+=" ";
        }

       return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
