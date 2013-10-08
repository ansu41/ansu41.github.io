define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Header.html',
    'constants',
    'bootstrap'
],

function (
    $,
    _,
    Backbone,
    PageHeader,
    constants
) {
    var PageHeader = Backbone.View.extend({
        el: '#pageHeader',
        template: _.template(PageHeader),
        events: {
            'click ul.nav li': 'selected',                
            'click .logo':'logo'
        },
        render: function () {
            this.$el.html(this.template());
            this.selectedPage();               
            $(window).scroll(function () {
              console.log('scroll');
                if ($(window).scrollTop() > 500) {
                    $('.goTop').show().animate({"right":"20px"}, 0);                       
                } else if ($(window).scrollTop() < 500) {
                    $('.goTop').animate({"right":"-50px"}, 0).show();
                }                   
            });
        },
        selectedPage:function(routes){
            var route = routes || window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
            if (route.trim() !== ''){
                $('ul.nav li').removeClass('active');
                $("ul.nav li:contains(" + route + ")").addClass('active');
                if(route==='Home')
                    $('.body-container').addClass('bounceIn animated');
            }
            else 
                $("ul.nav li:contains('Home')").addClass('active');
        },
        logo:function(){
            this.selectedPage("Home");
        },
        selected: function (event) {    
            $('.btn-navbar').trigger('click');
             if(event.target.text==='Home'){
                    $('.body-container').addClass('bounceIn animated');
            }
            this.selectedPage(event.target.text);
        },
        show: function () {
            this.render();
            this.$el.show();
            this.selectedPage();
        },
        hide:function(){
            this.$el.hide();
        },
    });
    return PageHeader;
});