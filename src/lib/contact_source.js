
/**
 * Executes an array of Command objects gotten in order from Parser
 * Passes the response from each command into the next command
 */
function ContactSource(id) {
    this.id = id;
}

/**
 *
 * @param events
 */
ContactSource.prototype.generate = function(events) {

    // iterate over event objects in order
    // build up a contact object
    // return the contact object

    return {};
};

module.exports = ContactSource;