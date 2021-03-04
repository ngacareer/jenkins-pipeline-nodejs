var request = require("request");
var base_url = "http://localhost:3000/";
var server = require("../app.js");

describe("Hello Ngacareer Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello Ngacareer", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello Ngacareer!");
        done();

        server.close();
      });
    });
  });
});
