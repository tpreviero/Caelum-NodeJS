var app = require("../../custom-express")();
var request = require("supertest");

describe("#ProdutosController", function(){
  it("listagem de produtos json", function(done){
    request(app).get("/produtos")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("listagem de produtos html", function(done){
    request(app).get("/produtos")
      .expect("Content-Type", /html/)
      .expect(200, done);
  });
});
