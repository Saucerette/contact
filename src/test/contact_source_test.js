var ContactSource = require('../lib/contact_source'),
    mockman = require('mockman'),
    assert = require('assert'),
    _ = require('underscore');

describe('ContactSource', function() {

   describe('generate', function() {

       it('should return an empty contact object when no events are set', function() {
           var events = [];
           var id = 'abd';

           var contact_source = new ContactSource(id);
           var contact = contact_source.generate(events);
           assert(_.isEmpty(contact));
       });
   });
});