define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Contact.html',
        'bootstrap'

    ],

    function (
        $,
        _,
        Backbone,
        PageContact
    ) {



        var PageContact = Backbone.View.extend({
            el: '#pageContact',
            template: _.template(PageContact),

            events: {
                // 'mouseover .images':'showCaption',
                // 'mouseout .carousel1-caption':'hideCaption'
                // 'mouseout .images':'hideCaptions'
                'click .social-icon': 'shareMe'
            },


            initialize: function () {
                this.render();
            },

            render: function () {
                this.$el.html(this.template());
                
                this.show();

            },
            shareMe: function (event) {
                var s = event.target.classList[2];
                switch (s) {
                case 'facebook':
                    // this.goTo("home");
                    window.open('https://www.facebook.com/AnasHashimPhotography');
                    break;
                case 'twitter':
                    window.open('https://twitter.com/anasphashim')
                    break;
                // case 'linkedin':
                //     window.open('http://www.linkedin.com/shareArticle?mini=true&url=http://www.shaibiginfosystem.com&title=Shaibig Infosystem And Solutions&summary=Put your summary here');
                //     break;
                case 'googleplus':
                    window.open('https://plus.google.com/u/0/115396970064208096488');
                    break;
                }
            },
            //to remove sub nav bar
            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.$el.show();
            }




        });

        return PageContact;

    });