var expect = require('chai').expect;
var route = require('../routes');
var app = require('../app.js')
var request = require('supertest');

describe('http requests', function(){
	
	

	describe('POST /', function() {
		beforeEach(function() {
		route;
	})
		it('POST responds to /', function testPost(done){
			request(app)
				.post('/')
				.send({ "hey": "Hello"})
				.expect(201)
				.expect('Hello')
				.then(() => done())
				.catch(function(err){
					console.log("There is an error")
				})
		})

		it('GET responds to /', function testPost(done){
			request(app)
				.get('/')
				.then(() => done())
				.catch(function(err){
					console.log("There is an error")
				})
		})
	})
		
})
