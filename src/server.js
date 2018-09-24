var express = require('express');
var path = require('path');
var config = require('../webpack.config');
const port = 8997;
const app = express();
let username ='default';

app.get(`/user:${username}`, function(req, res){
  debugger;
  console.log(req);
  res.sendFile(path.join(__dirname,`../asset/data_source/${username}.json`));
});

app.listen(port, function(err){
  if(err){
    consloe.console.log(err);
  } else {
    console.log(`Started : http://localhost:${port}`);
  }
});