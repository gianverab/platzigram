var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/signin', function(ctx, next){
	title('Platzigram | Signin')
	var main = document.getElementById('mainContainer');
	empty(main).appendChild(template);
})