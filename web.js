var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var msg = 'File does not exist!';
  fs.exists('index.html', function(exists) {
    if (exists) {
      var indexContent = fs.readFileSync('index.html');
      if (Buffer.isBuffer(indexContent) {
        msg = Buffer.toString(indexContent);  
      } else {
        msg = indexContent;
      }
    }
    response.send(msg);	
  });     
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
