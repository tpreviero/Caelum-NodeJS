function UsuarioDao(connection){
  this._connection = connection;
}

UsuarioDao.prototype.insert = function(usuario, callback) {
    this._connection.query('insert into usuario SET ?', usuario, callback);
};

UsuarioDao.prototype.valida = function(usuario, callback) {
  this._connection.query("select if(count(*) > 0, true, false) as status from usuario where usuario='"+usuario.email+"' and senha='"+usuario.senha+"'",
    function(error, results, fields){
      callback();
    });
}

module.exports = UsuarioDao;
