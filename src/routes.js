var express = require('express'),
    logger = require('./lib/logger'),
    ContactSource = require('lib/contact_source');

module.exports = (function() {
    'use strict';

    var routes = express.Router();

    /**
     * Get an object whose state is derived from the events for this id
     */
    routes.post('/contact/:id', function(req, res){
        // use a contact event source to generate a contact entity
        var contact_source = new ContactSource(req.param('id'));
        var contact = contact_source.generate(req.body);

        if (contact) {
            res.send(200).json(contact);
        } else {
            // not sure 404 is the right response here
            // the entity does not exist, but...?
            res.send(404);
        }
    });

    return routes;

})();
