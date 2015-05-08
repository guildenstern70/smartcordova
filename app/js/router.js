var Router = Backbone.Router.extend({

    routes: {
        "":     "loginView",
        "home": "homePage",
    },

    initialize: function() {
        console.log('Initializing routes...');
    },

    loginView: function() {
        console.log('Navigating to login');
        new LoginView();
    },

    homePage: function() {
        console.log('Navigating to home');
        new HomePage();
    }

});


