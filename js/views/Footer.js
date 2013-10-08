define(
[
    'jquery',
    'underscore',
    'backbone',
    'text!Templates/Footer.html'
],
function (
    $,
    _,
    Backbone,
    PageFooter
) {
    var PageFooter = Backbone.View.extend({
        el: '#pageFooter',
        template: _.template(PageFooter),
        events: {
            'click  .id-footer-nav ul li a':'selected'
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(this.template());               
        },
        selected: function (event) {
            $('ul.id-footer-ul li a').removeClass('id-footer-nav-active');
            $(event.target).addClass('id-footer-nav-active');
            $('ul.nav li').removeClass('active');
            $("ul.nav li:contains(" + event.target.text + ")").addClass('active');
        },
        hide: function () {
            this.$el.hide();
        },
        show: function () {
            this.$el.show();
        }
    });
    return PageFooter;
});