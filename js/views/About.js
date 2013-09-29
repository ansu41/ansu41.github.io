define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/About.html',
        'bootstrap'

    ],

    function (
        $,
        _,
        Backbone,
        PageAbout
    ) {



        var PageAbout = Backbone.View.extend({
            el: '#pageAbout',
            template: _.template(PageAbout),

            events: {
               
            },


            initialize: function () {
                // this.render();
            },

            render: function () {
                this.$el.html(this.template());
            },

            //to remove sub nav bar
            hide: function () {                
                $('.ph-aboutPage').removeClass('fadeInLeftBig animated');
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
                this.render();
                $('.ph-aboutPage').addClass(' fadeInLeftBig animated');
            }




        });

        return PageAbout;

    });