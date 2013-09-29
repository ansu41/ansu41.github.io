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


            initialize: function () {
                // this.render();
                
            },

            render: function () {
                this.$el.html(this.template());
                this.selectedPage();               
                // $(document).ready(function(){
                //     $('body').css('background','none');
                // });
        
                $(window).scroll(function () {
                  console.log('scroll');
                    if ($(window).scrollTop() > 500) {
                        $('.goTop').show().animate({"right":"20px"}, 0);                       
                    } else if ($(window).scrollTop() < 500) {
                        $('.goTop').animate({"right":"-50px"}, 0).show();
                    }                   
                });
               
            },
           
          
       
            shareUs: function (event) {
                var s = event.target.classList[2];
                switch (s) {
                case 'facebook':
                    // this.goTo("home");
                    window.open('https://www.facebook.com/sharer/sharer.php?u=http://www.idac.com/');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/intent/tweet?text="Shaibig Infosystem And Solutions" http://www.idac.com')
                    break;
                case 'linkedin':
                    window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.idac.com&title=iDac&summary=Put your summary here');
                    break;
                case 'googleplus':
                    window.open('https://plus.google.com/share?url=http://www.idac.com&title=iDac&summary=Put your summary here');
                    break;
                }
            },
            selectedPage:function(routes){

                var route = routes || window.location.hash.charAt(1).toUpperCase() + window.location.hash.slice(2);
                if (route.trim() !== ''){
                    $('ul.nav li').removeClass('active');
                    $("ul.nav li:contains(" + route + ")").addClass('active');
                    $('ul.id-footer-ul li a').removeClass('id-footer-nav-active');
                    $('ul.id-footer-ul li a:contains(' + route + ')').addClass('id-footer-nav-active');   
                    
                    
                    if(route==='Home')
                        $('.body-container').addClass('bounceIn animated');

                }
                else {
                    $("ul.nav li:contains('Home')").addClass('active');
                    $('.id-head-img').hide(); 
                }
               
            },
            logo:function(){
                this.selectedPage("Home");
            },

            selected: function (event) {    
                // $('.nav-collapse').css('height','0px');  
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

            renderAddUsersDiv: function () {
                this.trigger('renderAddUsers');
            },


        });

        return PageHeader;

    });