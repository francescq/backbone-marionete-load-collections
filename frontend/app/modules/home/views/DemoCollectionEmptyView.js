define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.ItemView.extend({

		template : require('text!./../templates/DemoCollectionEmptyView.hbs'),

		initialize: function() {
			console.info('init view for ', this.model.id);
		},

		onRender: function() {
			console.info('render view for ', this.model.id);

		}
    });

});
