const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send('Hello Salt Lake!');
});

app.get('/health', function(req, res) {
  res.send('200 OK')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});