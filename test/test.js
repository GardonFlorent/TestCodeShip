var request = require('supertest');
var api = require('../index');

describe('api', function() {
	it('should return Hello World on /', function() {
		request(api)
			.get('/')
			.send()
			.expect('Hello Foobar')	
	});
});