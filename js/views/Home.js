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
            'click .ph-home-ul li a':'selected'
        },
        render: function () {
            this.$el.html(this.template());  
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
        hide: function () {
            this.$el.hide();
        },
        show: function () {
            var self=this;
                self.render();
                self.$el.show();
        }
    });
    return PageHome;
});