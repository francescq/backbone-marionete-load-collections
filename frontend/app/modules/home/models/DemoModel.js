define(function (require) {
	'use strict';

	var Backbone = require('backbone');

	return Backbone.Model.extend({

		attributes: {
			id: undefined,
			name: undefined
		},

		id: 'íd',

		initialize: function(id) {
			this.set('id', id);
			this.set('name', 'name' +id);
		},

		fetch: function() {
			console.info('model fetch');

			var that = this;

			var sync= function() {
				that.fetched = true;

				that.trigger('change');
			};

			window.setTimeout(sync, 1000);
		}

	});

});
