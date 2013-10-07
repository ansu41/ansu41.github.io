// Original concepts provided by Backbone Boilerplate project: https://github.com/tbranyen/backbone-boilerplate
require.config({
    // Initialize the application with the main application file
    //deps: ["main"],

    // baseUrl: "js",
    catchError: {
        define: true
    },

    paths: {
        // Libraries
        jquery: "lib/jquery.min",
        jqueryUi: "lib/jquery-ui.min",
        underscore: "lib/underscore.min",
        backbone: "lib/backbone.min",       
        text: "lib/text",
        constants: "utils/constants",
        bootstrap:"lib/bootstrap.min",
        imageGallery:"lib/jquery.image-gallery",
        loadImage:"lib/load-image"
    },

    shim: {
        underscore: {
            exports: "_"
        },

        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        imageGallery:{
            deps:["jquery","jqueryUi","loadImage"]
        }
    },

    waitSeconds: 30

});

requirejs.onError = function (err) {
    if (err.requireType === 'timeout') {
        console.log("requirejs error: ");
        console.log(err);
    } else {
        throw err;
    }
};

require([
        'jquery',
        'underscore',
        'backbone',
        'router'
    ],




    function ($, _, Backbone, Router) {

        if (!window.console) {

            (function () {
                var names = ["log", "debug", "info", "warn", "error",
                    "assert", "dir", "dirxml", "group", "groupEnd", "time",
                    "timeEnd", "count", "trace", "profile", "profileEnd"
                ],
                    i, l = names.length;

                window.console = {};

                for (i = 0; i < l; i++) {
                    window.console[names[i]] = function () {};
                }
            }());
        }

        //IE fix
        if ($.browser.msie) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            }
        }


        $(document).ajaxError(function (event, jqxhr, settings, exception) {
            console.log("errrr");
            console.log(jqxhr.status);
            if (jqxhr.status == 401) {
                javascript: logout();
            }
        });

        var appRouter = new Router();

        Backbone.View.prototype.goTo = function (loc) {
            appRouter.navigate(loc, true);
        };
        Backbone.history.start();
       

    });