var fs = require('fs');
fs.readFile('./apples.txt', 'utf8', function(err, data) {
  if (err) {
    console.error(err);
  } else {
    var ajdData = data.replace(/apple/g, 'orange');
    fs.writeFile('./oranges.txt', ajdData, function(err) {
      if (err) console.error(err);
    });
  }
});
