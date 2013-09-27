define(
    [
        'views/page',
        'constants'
    ],

    function (
        PageView,
        constants
    ) {


        Router = Backbone.Router.extend({

            routes: {
                "": "home",
                "home": "home",                
                "about": "about",
                "gallery":"gallery",
                "contact":"contact",
                "blog":"blog"
              
            },

            initialize: function () {
                this.app = new PageView();
            },

            home: function () {
                this.app.showHome();
            },

            about: function () {
                this.app.showAbout();
            },

            gallery: function () {
                this.app.showGallery();
            },

            contact: function () {
                this.app.showContact();
            },

            blog: function () {
                this.app.showBlog();
            }

            
        })

        return Router;

    });