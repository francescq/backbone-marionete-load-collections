define(function (require) {
    'use strict';

    var Marionette = require('marionette');
    var IndexView = require('./views/index');


    return Marionette.Controller.extend({

        initialize: function (options) {
            this.app = options.app;
            this.logger = options.logger;
		},

        index : function () {
			var indexView = new IndexView({
				message: 'Demo collection loading!'
			});
			this.app.container.show(indexView);
		}
    });

});
