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

// Complete the organizingContainers function below.
function organizingContainers(container) {
    
    var length=container[0].length;
        var arcontainer=[];
        var artype=[];
        for(var k=0;k<length;k++)
        {
            var value=0;
            var value1=0;
            for(var j=0;j<length;j++)
            {
              
                value+=container[k][j];
                  value1+=container[j][k];
            }
            arcontainer.push(value);
            artype.push(value1);
        }
      arcontainer.sort(function(a,b){return a-b});
      artype.sort(function(a,b){return a-b});
    for(var l=0;l<artype.length;l++)
        {
        if(arcontainer[l]!=artype[l])
        {
            return "Impossible";
        }
        else{
            return "Possible";
        }
        }
     
        

      


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine(), 10);

        let container = Array(n);

        for (let i = 0; i < n; i++) {
            container[i] = readLine().split(' ').map(containerTemp => parseInt(containerTemp, 10));
        }

        let result = organizingContainers(container);

        ws.write(result + "\n");
    }

    ws.end();
}
