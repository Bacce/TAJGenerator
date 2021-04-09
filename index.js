const fs = require('fs');

function validate(e) {
  for (var t = 0, n = 0, r = 0; r < 8; r++) {
    var i = Number(e[r]);
    (r + 1) % 2 == 0 ? t += 7 * i : n += 3 * i
  }
  return Number(e[8]) === (t + n) % 10;
};

function bruteforce() {
  var stream = fs.createWriteStream("taj.txt", {flags:'a'});
  for(i=0; i<999999999; i++) {
    var number = (i).toPrecision(9).split('.').reverse().join('');
    if(validate(number)) stream.write(number + "\n");
  }
  stream.end();
}

bruteforce();