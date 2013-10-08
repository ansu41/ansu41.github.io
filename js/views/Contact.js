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
            'click .social-icon': 'shareMe'
        },
        render: function () {
            this.$el.html(this.template());
        },
        shareMe: function (event) {
            var s = event.target.classList[2];
            switch (s) {
            case 'facebook':
                window.open('https://www.facebook.com/AnasHashimPhotography');break;
            case 'twitter':
                window.open('https://twitter.com/anasphashim');break;              
            case 'googleplus':
                window.open('https://plus.google.com/u/0/115396970064208096488');break;
            }
        },
        hide: function () {                
            $('.ph-contactPage').removeClass('fadeInLeftBig animated');
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
            this.render();
            $('.ph-contactPage').addClass(' fadeInLeftBig animated');
        }
    });
    return PageContact;
});