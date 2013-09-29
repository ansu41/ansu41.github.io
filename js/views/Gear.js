define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Gear.html',
        'bootstrap'

    ],

    function (
        $,
        _,
        Backbone,
        PageGear
    ) {



        var PageGear = Backbone.View.extend({
            el: '#pageGear',
            template: _.template(PageGear),

            events: {
                // 'mouseover .images':'showCaption',
                // 'mouseout .carousel1-caption':'hideCaption'
                // 'mouseout .images':'hideCaptions'
            },


            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template());
                
                this.show();

            },

            //to remove sub nav bar
            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            }




        });

        return PageGear;

    });