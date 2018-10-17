function processData(input) {
  var lines = input.split('\n');
  var T = parseInt(lines.shift(), 10);

  while (T--) {
    lines.shift();
    var ladders = {};
    var snakes = {};
    [ladders, snakes].forEach(function (obj) {
      lines.shift().split(' ').map(function (pair) {
        return pair.split(',');
      }).forEach(function (pair) {
        obj[pair[0]] = pair[1];
      });
    });

    var a = [0];
    for (var i = 0; i <= 100; i++) { a.push(i); }

    for (i = 1; i < 100; i++) {
      for (var j = 1; j <= 6 && i + j <= 100; j++) {
        var t = i + j;
        var tt = ladders[t] || snakes[t] || t;
        a[tt] = Math.min(a[i] + 1, a[tt]);
      }
    }

    console.log(a[100]);
  }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});