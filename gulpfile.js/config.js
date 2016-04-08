'use strict';

module.exports = function () {
	require('require-dir')('./configs', {
    	recurse: true
	});
}