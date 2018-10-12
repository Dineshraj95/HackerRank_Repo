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

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    
         var hm=new Map();
       

        for(var i=arr.length-1;i>0;i--)
        {
             var ar=[];
            var value=arr[i];
             var min=Number.MAX_VALUE;
            var index=-1;
            for(var j=i-1;j>=0;j--)
            {
                var difference=Math.abs(arr[i]-arr[j]);
                if(difference<min)
                {
                    min=difference;
                    index=j;
                }
            }
            ar.push(value+"");
            ar.push(arr[index]+"");
            if(hm.get(min)!=null)
            {
                var ar1=hm.get(min);
                var t=ar1.concat(ar);
                hm.set(min,t);
            }
            else{
                hm.set(min,ar);
            }
        }
   // console.log(hm);
         var sortedKeys = Array.from(hm);
          sortedKeys.sort(function(a,b)
                         {
              return a[0]-b[0]
          });
          
       
      
      var ar1=sortedKeys[0];
    var ar2=ar1[1];
        
      
      ar2.sort(function(a,b)
              {
          return parseInt(a)-parseInt(b)
      });
        
        return ar2;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}
