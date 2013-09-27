define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Home.html',
        'constants',
        'bootstrap'


    ],

    function (
        $,
        _,
        Backbone,
        PageHome,
        constants
    ) {



        var PageHome = Backbone.View.extend({
            el: '#pageHome',
            template: _.template(PageHome),

            events: {
                // 'click span.read-more': 'selectedService',
                // 'click ul.home li a': 'selectedService'
                'click .ph-home-ul li a':'selected'
            },


            initialize: function () {
                

            },

            render: function () {
                this.$el.html(this.template());  
                
                // this.show();
                
            },
            selected:function(e){
                e.preventDefault();
            
                $('.body-container').removeClass('bounceIn animated');
                var route=$(e.currentTarget).attr('href');
                route=route.substring(route.lastIndexOf('#')+1);
                $('.ph-head-nav ul li').removeClass('active');
                $(".ph-head-nav ul li:contains(" + route.charAt(1).toUpperCase() + ")").addClass('active');
                this.goTo(route);

            },
          
            //to remove sub nav bar
            hide: function () {
                this.$el.hide();
             
            },

            show: function () {
                var self=this;
                // setTimeout(function () {
                    self.render();
                    self.$el.show();
                // },1000);
                // $('.ph-home-img').addClass('fadeInLeftBig');
                // $('.ph-home-menu').addClass('fadeInTopBig');   
            }

        });

        return PageHome;

    });