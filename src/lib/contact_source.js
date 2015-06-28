var _ = require('underscore');

/**
 * Executes an array of Command objects gotten in order from Parser
 * Passes the response from each command into the next command
 */
function ContactSource(id) {
    this.id = id;
}

/**
 * @param events array of event objects
 */
ContactSource.prototype.generate = function(events) {

    var contact = {};

    // iterate over event objects in order
    // build up a contact object

    _.each(events, function(event) {
        _.each(event['data'], function(value, key){

            // if value is an array then append its contents to the current contact array
            if (_.isArray(value)){
                if (!_.isArray(contact[key])){
                    contact[key] = value;
                } else {
                    contact[key] = contact[key].concat(value);
                }
            } else {
                contact[key] = value;
            }
        });
    });

    // return the contact object
    return contact;
};

module.exports = ContactSource;