var page = require('page');

page('/', function(ctx, next){
	var main = document.getElementById('mainContainer');

	main.innerHTML = '<a href="/signup">Signup</a>';	
})