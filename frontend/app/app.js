define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    /**
     * @type {Marionette.Application}
     */
    var app = window.app = new Marionette.Application();
	app.addRegions({
		'container' : '#container'
	});
    /**
     * Load our application
     */
    require('autoload/vendors')(app);
    require('autoload/plugins')(app);
    require('autoload/modules')(app);



    app.on('initialize:after', function (options) {
        if (!Backbone.history.start({ pushState : options.pushState })) {
            Backbone.history.navigate('home', { trigger : true });
        }
    });

    return app;
});






