var connectionFactory = require("../infra/connectionFactory");
var ProdutoDao = require("../infra/ProdutoDao");

module.exports = function(app) {

  app.get("/produtos", function(req, res){

    var connection = connectionFactory();
    var produtos = new ProdutoDao(connection);

    produtos.lista(function(error, results, fields){
      try {
        if(error){
          next(e);
        }else{
          res.format({
              html: function(){
                res.render("produtos/lista", {lista:results});
              },json: function(){
                res.json(results);
              }
          });
        }
      } catch(e) {
        next(e);
      }
    });
    connection.end();
  });

  app.get("/produtos/form", function(req, res){
    res.render("produtos/form")
  });

  app.post("/produtos", function(req, res){
    var livro = req.body;
    var connection = connectionFactory();
    var produtos = new ProdutoDao(connection);

    req.assert("titulo", "Campo obrigatorio").notEmpty();
    req.assert("preco", "Apenas números").isFloat();
    req.assert("preco", "Campo obrigatorio").notEmpty();
    req.assert("descricao", "Campo obrigatorio").notEmpty();

    var errors = req.validationErrors();
    if(errors){
    return res.format({
      html: function(){
        res.status(400).render("produtos/form",{errors:errors});
      },json: function() {
        res.satus(400).send(errors);
      }
    });
  }
    produtos.salva(livro, function(exception, result){
        res.redirect("/produtos");
    });
  });
}
