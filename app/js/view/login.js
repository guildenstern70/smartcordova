APP_TITLE = "SMART DEMO";

var LoginView = Backbone.View.extend({

        el: $('#content'),

        events: {
            'click button#btnlogin' : 'perform_login'
        },

        initialize: function() {
            console.log('Loading LoginView...');
            this.render();
        },

        render: function() {

            var context = {
                'app_title': APP_TITLE,
            };

            nunjucks.configure('templates', { autoescape: true });
            var html = nunjucks.render('login.html', context);

            $(this.el).html(html);
            $(this.el).trigger('create');

        },

        checkPassword: function(password) {

            return (password === 'doctor');
        },

        perform_login: function() {

            var username = $('#username').val();
            var password = $('#password').val();

            if ((username.length > 0) && (password.length > 0)) {

                console.log('Checking password for ' + username);

                if (this.checkPassword(password)) {

                    user.set("name", username);
                    console.log('Password OK. Going to Home Page ');
                    router.navigate('home', {trigger: true});

                }
                else {
                    toastr.warning('Invalid password!');
                }

            }
        },

    }
);
