var express = require("express");
var expressValidator = require("express-validator");
var app = express();
var bodyParser = require("body-parser");

module.exports = function() {
  app.set("view engine", "ejs");
  app.use(express.static("public"));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(expressValidator());


  /*app.use(function(error, req, res, next){
    res.status(500).render("erros/500");
  });

  app.use(function(error, req, res, next){
    res.status(404).render("erros/404");
  });*/

  require("./routes/produtos")(app);
  require("./routes/usuario")(app);
  require("./routes/promocoes")(app);

  return app;
}
