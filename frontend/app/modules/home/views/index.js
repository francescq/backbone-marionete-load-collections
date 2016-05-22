define(function (require) {
	'use strict';

	var Marionette = require('marionette');
	var DemoCompositeView = require('./DemoCompositeView');
	var LoadingView = require('./LoadingView');
	var DemoCollection = require('../collections/DemoCollection');


	return Marionette.LayoutView.extend({

		template: require('text!./../templates/index.hbs'),

		regions: {
			demo: '#demo'
		},

		ui: {
			instant: '#instantRender',
			delayed: '#delayedRender',
			empty: '#empty'
		},

		events: {
			'click @ui.instant': 'onInstantRenderClick',
			'click @ui.delayed': 'onDelayedRenderClick',
			'click @ui.empty': 'onEmptyClick'
		},

		initialize: function() {

		},

		onInstantRenderClick: function() {
			this.demoCollection = new DemoCollection([], {mode:'renderAsSoonAsYouCan'});

			this.renderAndFetch();

		},

		onDelayedRenderClick: function() {
			this.demoCollection = new DemoCollection([], {mode: 'waitAllDataBeforeRender'});

			this.renderAndFetch();
		},

		//onEmptyClick: function() {
		//	this.demoCollection = new DemoCollection([], {mode: 'empty'});
        //
		//	this.renderAndFetch();
		//},

		renderAndFetch: function() {
			if(this.demoCollection.fetched) {
				this.renderView();
			} else {
				this.demo.show(new LoadingView());
			}

			this.listenTo(this.demoCollection, 'sync', this.renderView);

			this.demoCollection.fetch();
		},

		renderView: function () {
			this.demo.show(new DemoCompositeView({
				collection: this.demoCollection
			}));
		},

		serializeData: function () {
			return {
				'message': this.options.message
			};
		},


	});

});
