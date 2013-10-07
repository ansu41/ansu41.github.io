define(
    [
        'jquery',
        'underscore',
        'backbone',
        'text!Templates/Gallery.html',        
        'jqueryUi',
        'loadImage',
        'imageGallery'

    ],

    function (
        $,
        _,
        Backbone,
        PageGallery
    ) {
        

        var PageGallery = Backbone.View.extend({
            el: '#pageGallery',
            template: _.template(PageGallery),

            events: {
             
                  'click .pagination a':'fetchMore'
            },


            initialize: function () {

                
            },

            render: function () {
                this.$el.html(this.template()); 
                $('#gallery').imagegallery();               
                this.fetchByPages(1);
            },
            
            fetchByPages:function(page){
                $.ajax({
                    url: 'http://api.flickr.com/services/rest/?',
                    data: {
                        format: 'json',
                        method: 'flickr.people.getPublicPhotos',
                        api_key: '1b401c84d95d61aca65d28549d3526f7',
                        user_id:'83333750@N02',
                        page:page,
                        per_page:65
                    },
                    dataType: 'jsonp',
                    jsonp: 'jsoncallback'
                }).done(function (data) {
                    var gallery = $('#gallery'),
                        url;
                    $('.pagination').html('').append('<div class="span12"></div>');
                    $('#gallery').html('');

                    for(var i=1;i<=data.photos.pages;i++){
                        $('.pagination').append('<span><a href="#gallery">'+i+'</a></span>');
                    }
                    $('.pagination span:contains('+data.photos.page+')').addClass('active');
                    $.each(data.photos.photo, function (index, photo) {
                        url = 'http://farm' + photo.farm + '.static.flickr.com/' +
                            photo.server + '/' + photo.id + '_' + photo.secret;
                        $('<a data-gallery="gallery"/>')
                            .append($('<img>').prop('src', url + '_s.jpg'))
                            .prop('href', url + '_b.jpg')
                            .prop('title', photo.title)
                            .appendTo(gallery);
                    });
                });       
            },

            fetchMore:function(event){
                event.preventDefault();
                this.fetchByPages(event.target.text);
                // console.log(event.target.text);
            },

            // galleryNav:function(event){
            //     $('.gal-nav li').removeClass('selected');
            //     $(event.currentTarget).addClass('selected');
            //     console.log(event.target.innerHTML);
            //     var sText=event.target.innerHTML.trim();
            //     $('.All').hide();
            //     $('.'+sText).show();
            // },

            // showPreview:function(event){
            //     $('#popUpTemp').show();
            //     var src = event.currentTarget.src;
            //     var id = src.substring(src.lastIndexOf('/') + 1, src.length);
            //     console.log(id);
            //     // id = id.substring(0, id.lastIndexOf('-'));
            //     this.imageZoom = new imageZoom({
            //         imageId: id
            //     });
            //     this.imageZoom.show();
            //     $('.thumbDiv').css('width',$('.thumb').width());
            //     console.log($('.thumb').width());
            // },

            // closePreview:function(event){
            //     $(event.currentTarget.parentElement).addClass('fadeOut');
            //     setTimeout(function(){
            //         $(event.currentTarget.parentElement).remove();
            //     },1400);
            // },
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