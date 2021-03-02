var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
    it('Respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/kd').expect({
            status : true,
            message : 'Hello World'
        }, done);
    });
});