require("./env");

var vows = require('vows');
var assert = require('assert');

var suite = vows.describe('Event Engine');

suite.addBatch({
    'event execution': {
        topic: function () {
            return dc.events;
        },

        'event can be dispatched immediately': function (engine) {
            var triggered = false;
            engine.trigger(function(){triggered = true;});
            assert.isTrue(triggered);
        },

        'event can be dispatched with delay': function (engine) {
            var triggered = false;
            engine.trigger(function(){triggered = true;}, 100);
            assert.isFalse(triggered);
        }
    }
});

suite.export(module);


