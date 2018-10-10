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

// Complete the weightedUniformStrings function below.
function weightedUniformStrings(s, queries) {
    
    var weights = {
            "a": 1,
            "b": 2,
            "c": 3,
            "d": 4,
            "e": 5,
            "f": 6,
            "g": 7,
            "h": 8,
            "i": 9,
            "j": 10,
            "k": 11,
            "l": 12,
            "m": 13,
            "n": 14,
            "o": 15,
            "p": 16,
            "q": 17,
            "r": 18,
            "s": 19,
            "t": 20,
            "u": 21,
            "v": 22,
            "w": 23,
            "x": 24,
            "y": 25,
            "z": 26
        };
    var chars = s.split('');
    var numb = [];
        for (var i=0; i < chars.length; i++){
            numb.push( weights[chars[i]] );
            var times = 1;
            if (i<(chars.length-1)){
               
                while ( chars[i] == chars[i+1]){
                    times = times+1;
                    numb.push( weights[chars[i]] *  times  );
                    i = i+1;
                }
                
            }

            
        }
       var res=[];         
    

    for(var a0 = 0; a0 < queries.length; a0++){
        var x = queries[a0];
        if (numb.indexOf(x)>-1){
            res.push("Yes");
        }else{
            res.push("No");
        }
    }
    return res;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
