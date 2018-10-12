'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countSort function below.
function countSort(arr) {
    
    
     for(var i=0;i<arr.length/2;i++)
        {
            var s=arr[i];
            var index=s[0];
            var value="-";
            var rep=[];
            rep.push(index);
            rep.push(value);
            arr[i]=rep;
        }
     
        
        
        var hm=new Map();
        for(var i=0;i<arr.length;i++)
        {
            var s=arr[i];
           
            var index=parseInt(s[0]);
            var value=s[1];
            if(hm.get(index)==null)
            {
                hm.set(index,value);
            }
            else{
                var value1=hm.get(index);
                var replaced=value1+" "+value;
                hm.set(index,replaced);
            }
        }
    
      //  System.out.println(hm);
        var res="";
        var arr1=Array.from(hm);
    
    arr1.sort(function(a,b){
            return a[0]-b[0]
        });
    //console.log(arr1);
        for(var k=0;k<arr1.length;k++)
       {
           var arr2=arr1[k];
           var index=arr2[0];
           var mvalue=arr2[1];
           res+=mvalue+" ";          
           
       }
       console.log(res);


}

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
