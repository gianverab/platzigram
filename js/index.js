var page = require('page');

var main = document.getElementById('mainContainer');

page('/', function(ctx, next){
	main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function(ctx, next){
	main.innerHTML = '<a href="/">Home</a> Signup';
})

page();