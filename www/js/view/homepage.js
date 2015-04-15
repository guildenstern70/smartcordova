var HomePage = Backbone.View.extend({

        el: $('#content'),

        events: {

        },

        initialize: function() {
            this.username = user.get("name");
            console.log('Loading HomePage for user ' + this.username);
            this.render();
        },

        render: function() {
            var source = $('#homepage').html();
            var context = {
                'username': this.username,
            };
            var template = Handlebars.compile(source);
            var html = template(context);

            $(this.el).html(html);
            $(this.el).trigger('create');

        },

    }
)
