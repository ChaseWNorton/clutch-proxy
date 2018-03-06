const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));
app.use('/:id', express.static(__dirname + '/../client/dist'));
app.use('/pledge/:id', express.static(__dirname + '/../client/dist'));

// app.get('/pledge/:id', function (req, res) {
//   console.log('req.params', req.params.id);
//   console.log('Server received a post request', req.url); 
//   res.send('hey Chas')
// });

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});