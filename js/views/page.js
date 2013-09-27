define(
    ['jquery',
        'underscore',
        'backbone',
        'constants',
        'views/Header',
        'views/Footer',
        'views/Home',
        'views/About',
        'views/Gallery',
        'views/Contact',
        'views/Blog'

    ],

    function (
        $,
        _,
        Backbone,
        constants,
        PageHeader,
        PageFooter,
        PageHome,
        PageAbout,
        PageGallery,
        PageContact,
        PageBlog
        ) {

        var PageView = Backbone.View.extend({

            el: 'body',

            initialize: function () {
                var self = this;
                
                this.header = new PageHeader();
                this.footer = new PageFooter();
                this.home = new PageHome();
                this.about = new PageAbout();
                this.gallery=new PageGallery();
                this.contact=new PageContact();
                this.blog=new PageBlog();
                _.bindAll(this);                 
            },

            showHome: function () {
                this.hideOtherViews();
                this.route = window.location.hash;
                if (this.route.trim() == '')
                    this.goTo("home");
                this.home.show();
                this.header.hide();
                this.footer.hide();

            },          

            showAbout: function () {
                this.hideOtherViews();
                this.about.show();
                this.header.show();
                this.footer.show();
            },

            showGallery: function () {
                this.hideOtherViews();
                this.gallery.show();
                this.header.show();
                this.footer.show();
            },

            showContact: function () {
                this.hideOtherViews();
                this.contact.show();
                this.header.show();
                this.footer.show();
            },

            showBlog: function () {
                this.hideOtherViews();
                this.blog.show();
                this.header.show();
                this.footer.show();
            },

            hideOtherViews: function () {
                
                if (this.home)
                    this.home.hide();
              
                if (this.about)
                    this.about.hide();

                if (this.gallery)
                    this.gallery.hide();

                if (this.contact)
                    this.contact.hide();

                if (this.blog)
                    this.blog.hide();
            }
           

        });

        return PageView;

    });