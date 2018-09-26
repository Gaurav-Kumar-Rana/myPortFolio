var express = require('express');
var path = require('path');
var cors = require('cors');
var config = require('../webpack.config');

const port = 8997;
const originPort = 8998;
const app = express();
let username = 'default';

app.use(cors({credentials: true, origin: `http://localhost:${originPort}`}));

app.get(`/user:${username}`, function(req, res){
  username = req.path.split('/')[1].split(':')[1];
  console.log("Request profile of : " + username);
  res.sendFile(path.join(__dirname,`../asset/data_source/${username}.json`));
});

app.listen(port, function(err){
  if(err){
    consloe.console.log(err);
  } else {
    console.log(`Started : http://localhost:${port}`);
  }
});