#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('demo:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
// app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app.callback());

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);




//爬虫模块开始
let fs = require('fs');
let request = require("request");
let cheerio = require("cheerio");
let mkdirp = require('mkdirp');
   
//目标网址
let url = 'http://www.fjisu.com/';
 
//本地存储目录
let dir = 'E:/images';
 
//创建目录
mkdirp(dir, function(err) {
  if(err){
    console.log(err);
  }
});
 
//发送请求
// request(url, function(error, response, body) {
//   if(error || response.statusCode != 200){
//     console.log(error)
//   }
//   if(!error && response.statusCode == 200) {
//     let $ = cheerio.load(body);
//     $('.y-content img').each(function() {
//       let src = $(this).attr('src');
//       console.log('正在下载' + src);
//       download(src, dir, src.replace(/\//g,'1').substr(-8,4));
//     });
//   }
// });
//下载方法
let download = function(url, dir, filename){
    request(url)
    .on('error', function(err) {
      console.log(err)
    })
    .on('end', function() {
      console.log('文件下载成功');
    })
    .pipe(fs.createWriteStream(dir + "/" + filename +'.jpg'));
};
//爬虫模块结束




/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
