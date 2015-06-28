var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('./lib/logger'),
    _ = require('underscore');

logger.info('running');


var routes = express.Router();

/**
 * Get an object whose state is derived from the events for this id
 */
routes.get('/contact/:id', function(req, res){


});

var PORT = process.env.PORT || 80;
var app = express();

app.use(bodyParser.json({limit: '1024kb'}));
app.use('/', routes);
app.listen(PORT);

logger.info('Running contact service on http://localhost:' + PORT);