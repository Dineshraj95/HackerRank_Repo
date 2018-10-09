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

// Complete the timeInWords function below.
function timeInWords(h, m) {
    
    var res="";
        var nums = [ "zero", "one", "two", "three", "four", 
                        "five", "six", "seven", "eight", "nine", 
                        "ten", "eleven", "twelve", "thirteen", 
                        "fourteen", "fifteen", "sixteen", "seventeen", 
                        "eighteen", "nineteen", "twenty", "twenty one", 
                        "twenty two", "twenty three", "twenty four", 
                        "twenty five", "twenty six", "twenty seven", 
                        "twenty eight", "twenty nine", 
                      ]; 
  
    if (m == 0) 
       res=nums[h]+" o' clock"; 
  
    else if (m == 1) 
      res="one minute past "+nums[h]; 
  
    else if (m == 59) 
        res="one minute to "+nums[(h % 12) + 1]; 
  
    else if (m == 15) 
        res="quarter past "+nums[h]; 
  
    else if (m == 30) 
        res="half past "+nums[h]; 
  
    else if (m == 45) 
        res="quarter to "+nums[(h % 12) + 1]; 
  
    else if (m <= 30) 
        res=nums[m]+" minutes past "+nums[h]; 
  
    else if (m > 30) 
        res=nums[60 - m]+" minutes to "+ 
                                     nums[(h % 12) + 1]; 
       
        return res;



}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}
