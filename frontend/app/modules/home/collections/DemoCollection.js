define(function (require) {
	'use strict';

	var Backbone = require('backbone');
	var DemoModel = require('../models/DemoModel');
	var _ = require('underscore');

	return Backbone.Collection.extend({

		model: DemoModel,

		initialize: function (values, options) {
			this.mode = options.mode;
		},

		fetch: function () {
			console.info('collection fetch');

			if (this.mode === 'waitAllDataBeforeRender') {
				window.setTimeout(_.bind(function () {
					this.fetchOnlyCollection(this.mode);
				}, this), 2000);
			}
			else {
				window.setTimeout(_.bind(function () {
					this.fetchOnlyCollection(this.mode);
				}, this), 1000);
			}
		},

		fetchOnlyCollection: function (mode) {
			if (this.mode !== 'empty') {
				for (var i = 0; i < 10; i = i + 1) {
					var model = this.getDemoModel(i);

					if (mode !== 'waitAllDataBeforeRender') {
						model.fetch();
					} else {
						model.fetched = true;
					}

					this.add(model);
				}
			}

			this.trigger('sync');
			this.fetched = true;
		},

		getDemoModel: function (id) {
			return new DemoModel(id);
		}
	});

});
