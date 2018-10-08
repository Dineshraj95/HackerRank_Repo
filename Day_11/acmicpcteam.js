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

// Complete the acmTeam function below.
function acmTeam(topic) {
    
     var n=topic.length;
        var m=topic[0].length;
        
        var kA = [];
    for(var l=0;l<n;l++)
        {
            kA[l]=[];
            for(var k=0;k<m;k++)
                {
                    kA[l][k]=0;
                }
        }
        
        
        for (var i = 0; i < n; i++){
            var l = topic[i];
            
            for (var j = 0; j < m; j++){
                if (l[j] == '1'){
                   kA[i][j] = 1; 
                }
            }    
       }
       
       var countmax  = 0;
       var countteams = 0;
       
        for (var i = 0; i < n; i++){
           
            for (var j = i+1; j < n; j++){
                var tempmax = 0;
                for(var k = 0; k < m; k++){
                    
                    if (kA[i][k] == 1 || kA[j][k] == 1){
                        tempmax++; 
                    }
                    
                }
                //System.out.println(tempmax);
                if (tempmax > countmax){
                    countmax = tempmax;
                    countteams = 1;
                }else if(tempmax == countmax){
                     countteams++;
                }
                    
            }    
        }
        var res=[];
        res[0]=countmax;
        res[1]=countteams;
       return res;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
