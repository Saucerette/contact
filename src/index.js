var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('./lib/logger');
    routes = require('routes');

var PORT = process.env.PORT || 80;
var app = express();

app.use(bodyParser.json({limit: '1024kb'}));
app.use('/', routes);
app.listen(PORT);

logger.info('Contact service running');