 define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function (
        $,
        _,
        Backbone
    ){
        var constants = {
            eventbus: _.extend({}, Backbone.Events)
    }
    return constants;
}); 