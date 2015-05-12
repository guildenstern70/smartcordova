var HomePage = Backbone.View.extend({

        el: $('#content'),

        events: {
            'click button#btnlogout' : 'perform_logout'
        },

        initialize: function() {
            this.username = user.get("name");
            console.log('Loading HomePage for user ' + this.username);
            this.render();
        },

        render: function() {

            var context = {
                'username': this.username,
            };

            nunjucks.configure('templates', { autoescape: true });
            var html = nunjucks.render('home.html', context);

            $(this.el).html(html);
            $(this.el).trigger('create');

        },

        perform_logout: function() {

            if (user) {
                user.set("name", "");
                console.log('User logout ');
            }

            router.navigate('', {trigger: true});

        },

    }
);

