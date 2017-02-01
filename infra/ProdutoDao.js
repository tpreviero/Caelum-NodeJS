function ProdutoDao(connection){
  this._connection = connection;
}

ProdutoDao.prototype.salva = function(livro, callback){
    this._connection.query('insert into livros SET ?', livro, callback);
}

ProdutoDao.prototype.lista = function(callback){
    this._connection.query('select * from livros', callback);
}

module.exports = ProdutoDao;
