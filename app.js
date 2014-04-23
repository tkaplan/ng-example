var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var filename = __dirname + '/index.html';
  return res.sendfile(filename);

  require('fs').readFile(filename, function (err, data) {
    if(err) {
      res.send('Not Found', 404);
    } else {
      res.send(data);
    }
  });
});

app.use(express.static(__dirname));

app.listen(3000);
console.log("Application is listening on port: 3000");
console.log("Visit: http://localhost:3000 to view your application.");
