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
               
            },


            initialize: function () {
                
            },

            render: function () {
                this.$el.html(this.template());
            },            

            //to remove sub nav bar
            hide: function () {                
                $('.ph-blogPage').removeClass('fadeInLeftBig animated');
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
                this.render();
                $('.ph-blogPage').addClass(' fadeInLeftBig animated');
            }
        });

        return PageBlog;

    });