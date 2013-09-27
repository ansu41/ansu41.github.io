define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Gallery.html'
      

    ],

    function (
        $,
        _,
        Backbone,
        PageGallery
    ) {
        var imageZoom = Backbone.View.extend({

            tagName: "div",
            el: "#poPupDiv",
            events: {
                // 'click .closeButton': 'closeWindow',
                // 'keyup ': 'closeOnEscape'

            },

            initialize: function (options) {
                this.imageId = options.imageId;
                this.render();
            },
            render: function () {
                this.$el.html('<img class="thumb"  src="images/Portifolio/' + this.imageId + '-large.jpg" /><img class="closeButton"  src="images/closeButton.png" />');
                return this;
            },
            show: function () {
                this.$el.show();

            }
            // closeOnEscape: function (e) {
            //     if (e.keyCode === 27)
            //         this.closeWindow();
            // },
            // closeWindow: function () {
            //     $('#popUpTemp').hide();
            //     this.$el.html('');
            //     this.$el.hide();
            // }

        });


        var PageGallery = Backbone.View.extend({
            el: '#pageGallery',
            template: _.template(PageGallery),

            events: {
                // 'click .zoom': 'zoomImage'
                  'click .gal-nav li ':'galleryNav'
            },


            initialize: function () {

                
            },

            render: function () {
                this.$el.html(this.template());
            },

            galleryNav:function(event){
                // console.log('product-nav');
                $('.gal-nav li').removeClass('selected');
                $(event.currentTarget).addClass('selected');
                console.log(event.target.innerHTML);
                var sText=event.target.innerHTML.trim();
                $('.All').hide();
                $('.'+sText).show();
                // console.log(this)
            },
            
            //to remove sub nav bar
            hide: function () {
                this.$el.hide();
            },

            show: function () {
                this.render();
                this.$el.show();
            }


        });

        return PageGallery;

    });