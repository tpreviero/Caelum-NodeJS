var app = require("../../custom-express")();
var request = require("supertest");
var assert = require("assert");
var connectionFactory = require("../../infra/connectionFactory");
var UsuarioDao = require("../../infra/UsuarioDao");

describe("#UsuarioController", function() {
  beforeEach(function(done){
    var usuario = {
      email: "marco.bruno@caelum.com.br",
      senha: "caelum3bf4"
    }
    var connection = connectionFactory();
    var usuarioDao = new UsuarioDao(connection);

    usuarioDao.insert(usuario, function(){
      done();
    });
  });
  it("quero passar um  login e senha e isso tem que me retornar 200",
    function(done){
      var usuario = {
        email: "marco.bruno@caelum.com.br",
        senha: "caelum3bf4"
      }
      var connection = connectionFactory();
      var usuarioDao = new UsuarioDao(connection);

      request(app).post("/login")
      .expect(200, done);

      usuarioDao.valida(usuario, function(status){
        assert.equal(status, 1)
        .done();
      });
  });
});
