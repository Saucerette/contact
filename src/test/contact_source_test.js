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

       it('should return a contact object with one event', function() {

           var id = 'abd';
           var email = 'ptolemy.god@egypt.net';
           var events = [{
               'name' : 'ace.contact.created', 'timestamp' : '1', 'content-type' : 'application/vnd.ace.contact-v1+json',
               'data' : {'id' : id, 'email' : email}
           }];

           var contact_source = new ContactSource(id);
           var contact = contact_source.generate(events);

           assert.equal(id, contact.id);
           assert.equal(email, contact.email);
       });

       it('should return a contact object composed of event data', function() {

           var id = '12345';
           var email = 'ptolemy.god@egypt.net';
           var events = [
               {
                   'name' : 'ace.contact.created', 'timestamp' : '1', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'email' : email}
               },
               {
                   'name' : 'ace.contact.updated', 'timestamp' : '7', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'firstname' : 'Ptolemy'}
               },
               {
                   'name' : 'ace.contact.updated', 'timestamp' : '11', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'surname' : 'God'}
               },
               {
                   'name' : 'ace.contact.updated', 'timestamp' : '19', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'firstname' : 'Potty'}
               }
           ];

           var contact_source = new ContactSource(id);
           var contact = contact_source.generate(events);

           assert.equal(id, contact.id);
           assert.equal(email, contact.email);
           assert.equal('Potty', contact.firstname);
           assert.equal('God', contact.surname);
       });

       it('should return a contact object with array of phone numbers', function() {

           var id = '12345';
           var email = 'ptolemy.god@egypt.net';
           var events = [
               {
                   'name' : 'ace.contact.created', 'timestamp' : '1', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'email' : email}
               },
               {
                   'name' : 'ace.contact.phone.added', 'timestamp' : '39', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'phone' : ['02075551234']}
               },
               {
                   'name' : 'ace.contact.phone.added', 'timestamp' : '55', 'content-type' : 'application/vnd.ace.contact-v1+json',
                   'data' : {'id' : id, 'phone' : ['999']}
               },
           ];

           var contact_source = new ContactSource(id);
           var contact = contact_source.generate(events);

           console.log(contact);

           assert.equal(id, contact.id);
           assert.equal('02075551234', contact.phone[0]);
           assert.equal('999', contact.phone[1]);
       });
   });
});