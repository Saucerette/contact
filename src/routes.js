var express = require('express'),
    logger = require('./lib/logger'),
    ContactSource = require('./lib/contact_source');

module.exports = (function() {
    'use strict';

    var routes = express.Router();

    /**
     * Get an object whose state is derived from the events for this id
     */
    routes.post('/contact/:id', function(req, res){
        // use a contact event source to generate a contact entity
        logger.info("id: " + req.param('id') + ' body: ' + req.body);

        var contact_source = new ContactSource(req.param('id'));
        var contact = contact_source.generate(req.body);

        if (contact) {
            res.status(200).json(contact);
        } else {
            // the entity does not exist in the incoming data, so respond with 400 bad request
            res.status(400);
        }
    });

    return routes;

})();
