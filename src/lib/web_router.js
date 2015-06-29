var app = require('express')(),
    bodyParser = require('body-parser'),
    contact_routes = require('./contact_routes');

/**
 * Hook to set up routing of web requests
 */
module.exports.running = function() {
    'use strict';

    app.use(bodyParser.json({limit: '1024kb'}));

    app.use('/', contact_routes);
};

/**
 * Hook to start listening to web requests
 */
module.exports.connected = function() {
    'use strict';

    var PORT = process.env.PORT || 80;

    app.listen(PORT);
};