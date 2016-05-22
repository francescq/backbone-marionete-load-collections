define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.ItemView.extend({

        template : require('text!./../templates/DemoItemView.hbs'),

		onRender: function() {
			console.info('render view for ', this.model.id);
		}
    });

});
