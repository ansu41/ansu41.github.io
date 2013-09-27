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
                // 'mouseover .images':'showCaption',
                // 'mouseout .carousel1-caption':'hideCaption'
                // 'mouseout .images':'hideCaptions'
            },


            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template());
                $('#myCarousel1').carousel({
                    interval: 4000,
                    pause: "hover"
                });
                $('#myCarousel2').carousel({
                    interval: 2000,
                    pause: "hover"
                });
                this.show();

            },

            showCaption:function(event){
                console.log(event);
                $(event.target.nextElementSibling).show();
                // $(event.currentTarget.children[1]).slideUp();
            },
            hideCaptions:function(event){
                console.log(event);
                $(event.target.nextElementSibling).hide();
            }, 

            hideCaption:function(event){
                console.log(event);
                $(event.target).hide();
            },

            //to remove sub nav bar
            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            }




        });

        return PageAbout;

    });