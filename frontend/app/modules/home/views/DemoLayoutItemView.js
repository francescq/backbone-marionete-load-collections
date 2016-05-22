define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var LoadingView = require('./LoadingView');
    var DemoItemView = require('./DemoItemView');

    return Marionette.LayoutView.extend({

        template : require('text!./../templates/DemoLayoutView.hbs'),

		regions: {
			item: '#item'
		},

		initialize: function() {
			this.listenTo(this.model, 'change', this.renderItem);
		},

		onRender: function() {
			this.renderItem();
		},

		renderItem: function() {
			if(this.model.fetched) {
				this.showItem();
			} else{
				this.showLoading();
			}
		},

		showLoading: function() {
			this.item.show(new LoadingView());
		},

		showItem: function() {
			this.item.show(new DemoItemView({
				model: this.model}
			));
		}
    });

});
