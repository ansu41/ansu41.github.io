define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Blog.html',
        'bootstrap'

    ],

    function (
        $,
        _,
        Backbone,
        PageBlog
    ) {



        var PageBlog = Backbone.View.extend({
            el: '#pageBlog',
            template: _.template(PageBlog),

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

        return PageBlog;

    });