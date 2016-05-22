define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var DemoLayoutView = require('./DemoLayoutItemView');
	var DemoCollectionEmptyView = require('./DemoCollectionEmptyView');


	return Marionette.CompositeView.extend({

        template : require('text!./../templates/DemoCompositeView.hbs'),

		childView: DemoLayoutView,

		emptyView: DemoCollectionEmptyView,

		initialize: function() {
			console.info('DemoCompositeView init');
		},

		onRender: function() {
			console.info('DemoCompositeView render');
		},

		childViewOptions: function(model) {
			return {
				model: model
			};
		}
    });

});
