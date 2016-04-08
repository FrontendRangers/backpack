var marked = require('marked');

handlebars.registerHelper('md', function(text) {
	return marked(text);
});