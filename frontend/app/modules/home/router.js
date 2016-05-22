define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var Router = Backbone.Router.extend({

        routes: {
            'home' : 'home'
        },

		initialize: function(options) {
			this.controller = options.controller;
		},

		home: function() {
			this.controller.index();
		}
    });

    return Router;
});
