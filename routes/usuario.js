var connectionFactory = require("../infra/connectionFactory");
var UsuarioDao = require("../infra/UsuarioDao");

module.exports = function (app) {

  app.post("/login", function(req, res) {
    var usuario = req.body;
    var connection = connectionFactory();
    var usuarioDao = new UsuarioDao(connection);


    usuarioDao.valida(usuario, function(status) {
      if(status){
        res.redirect("/produtos");
      }else {
        res.status(400).render("usuario/login");
      }
    });

    usuarioDao.insert(usuario, function(exception, result){
        res.redirect("/produtos");
    });


  });

  app.get("/login", function(req, res){
    res.render("usuario/login");
  });

}
