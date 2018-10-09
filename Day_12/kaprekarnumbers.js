'use strict';

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

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    
       
    if(p>=400&&q<=700)
        {
            console.log("INVALID RANGE");
        }
       var res="";
       for(var i=p;i<=q;i++)
        {
            var square=Math.pow(i,2);
            
            var s=square+"";
            if(s=="1")
                {
                    res+=1+" ";
                }
           
            var s1="";
            var s2="";
            if(s.length%2!=0)
            {
                s1=s.substring(0,s.length/2);
                s2=s.substring(s.length/2);
            }
            else
            {
                  s1=s.substring(0,s.length/2);
                 s2=s.substring(s.length/2);
            }
            if((parseInt(s1)+parseInt(s2))==i)
            {
                res+=i+" ";
            }
        }
        console.log(res);

}

function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}
