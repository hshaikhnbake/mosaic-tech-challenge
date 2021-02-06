const app = require('./index');
const request = require("supertest");

describe('GET /ping', function () {
  it("Ping passed", function (done) {
    request(app)
      .get('/api/ping')
      .expect(200, {
        success: 'true'
      }, done);
  });
});

describe('GET /pings', function () {
  it("Ping failed", function (done) {
    request(app)
      .get('/api/pings')
      .expect(404, done);
  });
});

describe('GET /posts/tech', function () {
  it("Single post passed", function (done) {
    request(app)
      .get('/api/posts/tech')
      .expect(200, done);
  });
});

describe('GET posts/tech,science', function () {
  it("Multiple posts passed", function (done) {
    request(app)
      .get('/api/posts/tech,science')
      .expect(200, done);
  });
});

describe('GET /posts', function () {
  it("Route does not have a tag", function (done) {
    request(app)
      .get('/api/posts/')
      .expect(404, done);
  });
});

describe('GET /api/posts/tech/likes', function () {
  it("Route returns posts with single tag with 'likes' parameters to be sorted", function (done) {
    request(app)
      .get('/api/posts/tech/likes')
      .expect(200, done);
  });
});


describe('GET /api/posts/tech,science/id', function () {
  it("Route returns posts with mulitple tags with specified 'id' parameter to be sorted", function (done) {
    request(app)
      .get('/api/posts/tech,science/id/')
      .expect(200, done);
  });
});


describe('GET /posts/tech/likes/desc', function () {
  it("Route returns sorted posts with single tags with specified 'likes' parameter in descending order", function (done) {
    request(app)
      .get('/api/posts/tech/likes/desc')
      .expect(200, done);
  });
});

describe('GET /posts/tech,science/id/desc', function () {
  it("Route returns sorted posts with mulitple tags with specified 'id' parameter in ascending order", function (done) {
    request(app)
      .get('/api/posts/tech,science/id/asc')
      .expect(200, done);
  });
});

