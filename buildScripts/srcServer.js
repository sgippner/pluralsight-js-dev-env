import express from "express";
import path from "path";
import open from "open";
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
//create an instance of express (webserver)
const app = express();
//create a webpack compiler
const compiler = webpack(config);

//tell express to use 'webpack...'
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

//tell express which routes to handle
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err); // eslint-disable-line no-console
  }
  else{
    open('http://localhost:' + port);
  }
})