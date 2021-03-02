var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
    it('Respond with hello world', function(done) {
        //navigate to root and check the the response is "hello world"
        request(app).get('/').expect({
            status : true,
            message : 'HI-1'
        }, done);
    });
});