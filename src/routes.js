var express = require('express'),
    logger = require('./lib/logger');

module.exports = (function() {
    'use strict';
    var routes = express.Router();

    /**
     * Get an object whose state is derived from the events for this id
     */
    routes.get('/contact/:id', function(req, res){


    });

    return routes;
})();
