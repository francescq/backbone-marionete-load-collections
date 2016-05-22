/*global define*/

define(function (require) {
	'use strict';

	var Marionette = require('marionette'),
		Backbone = require('backbone');
	var _ = require('underscore');

	/**
	 * @class DealListLayout
	 * @extends Marionette.LayoutView
	 */
	return Marionette.CompositeView.extend({


		/** @private */
		template : require('text!./../templates/CollectionWithEmptyView.hbs'),

		///** @private */


			/** @private */
		initialize: function (options) {
			this.myCollection = options.collection;
			this.itemView = options.collectionView;
			this.cemptyView = options.collectionEmptyView;
			this.emptyView = options.collectionLoadingView;


			this.collection = new Backbone.Collection();

			this.updateCollectionState();

			this.listenTo(this.myCollection, 'sync add remove reset', _.bind(this.updateCollectionState, this));

		},

		updateCollectionState: function() {
			if(this.myCollection.length === 0) {
				this.collection.reset();
			} else {
				if (this.collection.length === 0) {
					this.collection.add([{myCollection:'myCollection'}]);
				}
			}

			this.emptyView = this.cemptyView;
		},

		/** @private */
		onRender: function () {
			console.info('CollectionWithEmptyView render');
		}


	});
});
