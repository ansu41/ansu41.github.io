 //file to keep all URL and other constants
 define(
     ['jquery',
         'underscore',
         'backbone'
     ],

     function (
         $,
         _,
         Backbone
     ) {


         var constants = {

             // userId: $('#userid').val(),
             // username: $('#user-disp').text(),
             // userRole: $('#userrole').val()           
             //
             eventbus: _.extend({}, Backbone.Events)



         }

         return constants;




     }); //file end