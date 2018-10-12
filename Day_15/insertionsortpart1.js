'use strict';

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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    
     var key=arr[arr.length-1];
        var k=0;
        for(var i=arr.length-2;i>=0;i--)
        {
            if(arr[i]>key)
            {
                arr[i+1]=arr[i];
            }
            else{
                arr[i+1]=key;
                break;
            }
            var res="";
            for(var j=0;j<arr.length;j++)
            {
                res+=arr[j]+" ";
            }
            console.log(res);
            k=i;
        }
        arr[k]=key;
        var res="";
        for(var j=0;j<arr.length;j++)
            {
                res+=arr[j]+" ";
            }
            console.log(res);


}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}
