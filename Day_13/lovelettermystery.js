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

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {
    
     if(s.length%2!=0)
        {
            s=s.substring(0,s.length/2)+s.substring((s.length/2)+1);
        } 
        
        var count=0;
        var k=-1;
        var i=0;
        var j=0;
        
        for(i=0,j=s.length-1;i<s.length/2;i++,j--)
        {
           
                if(s[i]!=s[j])
                {
                    var value=Math.abs(s.charCodeAt(i)-s.charCodeAt(j));
                   count+=value;
                   
                }
          
        }
       
       
        return count;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = theLoveLetterMystery(s);

        ws.write(result + "\n");
    }

    ws.end();
}
