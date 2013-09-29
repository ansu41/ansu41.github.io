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
                'click .closeButton': 'closeWindow',
                'keyup ': 'closeOnEscape'
            },

            initialize: function (options) {
                this.imageId = options.imageId;
                this.render();
            },
            render: function () {
                this.$el.html('<div class="thumbDiv"><img class="thumb"  src="images/Gallery/'+this.imageId+'" /><span class="closeButton">Close</span></div>');
                setTimeout(function(){
                    
                });
                
                return this;
            },
            show: function () {
                this.$el.show();

            },
            closeOnEscape: function (e) {
                if (e.keyCode === 27)
                    this.closeWindow();
            },
            closeWindow: function () {
                $('#popUpTemp').hide();
                this.$el.html('');
                this.$el.hide();
            }

        });

        var PageGallery = Backbone.View.extend({
            el: '#pageGallery',
            template: _.template(PageGallery),

            events: {
                // 'click .zoom': 'zoomImage'
                  'click .gal-nav li ':'galleryNav',
                  'click .gal-thumb':'showPreview',
                  'click .gal-closeImg':'closePreview'
            },


            initialize: function () {

                
            },

            render: function () {
                this.$el.html(this.template());                 
            },

            galleryNav:function(event){
                $('.gal-nav li').removeClass('selected');
                $(event.currentTarget).addClass('selected');
                console.log(event.target.innerHTML);
                var sText=event.target.innerHTML.trim();
                $('.All').hide();
                $('.'+sText).show();
            },

            showPreview:function(event){
                $('#popUpTemp').show();
                var src = event.currentTarget.src;
                var id = src.substring(src.lastIndexOf('/') + 1, src.length);
                console.log(id);
                // id = id.substring(0, id.lastIndexOf('-'));
                this.imageZoom = new imageZoom({
                    imageId: id
                });
                this.imageZoom.show();
                $('.thumbDiv').css('width',$('.thumb').width());
                console.log($('.thumb').width());
            },

            closePreview:function(event){
                $(event.currentTarget.parentElement).addClass('fadeOut');
                setTimeout(function(){
                    $(event.currentTarget.parentElement).remove();
                },1400);
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