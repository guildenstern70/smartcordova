var User = Backbone.Model.extend({

    defaults: {
        name: "",
        password: ""
    },

    initialize: function(){
        console.log('User has been initialized');
    },

});