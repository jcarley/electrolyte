/* global describe, it, expect */

var Container = require('../lib/container');
var node = require('../lib/loaders/node');

describe('Container', function() {
  var container = new Container();

  describe('#create', function() {

    describe('unknown component', function() {
      it('should throw an error', function() {
        expect(function() {
          var obj = container.create('unknown');
        }).to.throw(Error, "Unable to create object 'unknown'");
      });
    });

    describe('traditional module as a component', function() {
      var container = new Container();

      beforeEach(function() {
        // container.use(require('../lib/loaders/node_modules')());
        // container.use(node(__dirname + '/objects'));
        container.use(node(__dirname + '/integration/node/objects'));
      });

      it('return the same as require', function() {
        var obj = container.create('devices/settings');
        expect(obj).to.be.eql(require(__dirname + '/integration/node/objects/devices/settings')['default']());
      });
    });

    describe('unknown loader', function() {
      it('should throw an error', function() {
        expect(function() {
          container.use('test',undefined);
        }).to.throw(Error, "Container#use requires a function, was passed a 'undefined'");
      });
    });


  });

});
