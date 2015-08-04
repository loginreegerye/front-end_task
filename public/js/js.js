var App = function() {
	console.log('initial message');
	this.router = new this.Router();
	Backbone.history.start({pushState: true});
};

App.prototype.Router = Backbone.Router.extend({
	routes: {
		"": "index",
		"users": "users",
		"books": "books",
		"auth/login": "login",
		"auth/register": "register"
	},
	getContent: function(type = "GET", url = "/auth/login") {
		Backbone.ajax({
			type: type,
			async: false,
			url: url,
			success: function(data) {
				content = data;
			}
		});
		return content;
	},
	index: function() {
		console.log('index');
		new App.Views.Index();
	},
	users: function() {
		console.log('users');
		new App.Views.Users();
	},
	books: function() {
		console.log('books');
		new App.Views.Books();
	},
	login: function() {
		console.log('login');
		new App.Views.Login();
	},
	register: function() {
		console.log('register');
		new App.Views.Register();
	}
});

App.Views = {
	Index: Backbone.View.extend({
		el: ".content",
		initialize: function() {
			return this.render();
		},
		render: function() {
			this.$el.html('<p class="text-center">index</p>');
		}
	}),
	Users: Backbone.View.extend({
		el: ".content",
		initialize: function() {
			return this.render();
		},
		render: function() {
			this.$el.html('<p class="text-center">users</p>');
		}
	}),
	Books: Backbone.View.extend({
		el: ".content",
		initialize: function() {
			return this.render();
		},
		render: function() {
			this.$el.html('<p class="text-center">books</p>');
		}
	}),
	Login: Backbone.View.extend({
		el: ".content",
		initialize: function() {
			return this.render();
		},
		render: function() {
			this.$el.html('<p class="text-center">login</p>');
		}
	}),
	Register: Backbone.View.extend({
		el: ".content",
		initialize: function() {
			return this.render();
		},
		render: function() {
			this.$el.html('<p class="text-center">register</p>');
		}
	})
}

$(function() {
	var app = new App();
/*	$(document).on("click", "a", function() {
		Backbone.history.navigate($(this).attr("href"), {trigger: false});
	});*/
});