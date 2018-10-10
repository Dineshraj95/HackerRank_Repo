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

// Complete the makingAnagrams function below.
function makingAnagrams(s1, s2) {
    
     var c=s1.split("");
        var count=0;
        var length=s2.length;
        if(s1.length==s2.length)
        {
            for(var i=0;i<c.length;i++)
            {
                if(s2.includes(c[i]))
                {
                      
                    var index=s2.indexOf(c[i]);
                    s2=s2.substring(0,index)+s2.substring(index+1);
                    count++;   
                }
            }
            return (s1.length-count)*2;
        }
        else
        {
            for(var i=0;i<c.length;i++)
            {
                if(s2.includes(c[i]))
                {
                    var index=s2.indexOf(c[i]);
                    s2=s2.substring(0,index)+s2.substring(index+1);
                    count++;
                }
            }
            return (s1.length+length)-count*2;
        }


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}
