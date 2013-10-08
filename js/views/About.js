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
        render: function () {
            this.$el.html(this.template());
        },
        hide: function () {                
            $('.ph-aboutPage').removeClass('fadeInLeftBig animated');
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
            this.render();
            $('.ph-aboutPage').addClass(' fadeInLeftBig animated');
        }
    });
    return PageAbout;
});