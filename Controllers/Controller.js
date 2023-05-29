const db = require('../db/conn');

module.exports = class Controller{

  static async create(req,res){
    res.render('index')
  };

  static async listagem(req,res){
    db.query('SELECT * FROM filmes ORDER BY ano_lancamento, titulo',[],(erro,result) => {
      if(erro){
        res.status(404).send(erro)
      }
      res.render('lista', { lista: result})
    });
  };

  static async acessarFormulario(req,res){
    res.render('form', {filme : {}})
  }

  static async adicionar(req,res){
    db.query(`INSERT INTO filmes(titulo, ano_lancamento) VALUES(?,?)`,[req.body.titulo, req.body.ano],(err) => {
      if(err){
        res.status(404).send(`Erro: ${err}`)
      }
      res.redirect('/listar')
    })
  };
  
  static async editar(req,res){
    db.query('SELECT * FROM filmes WHERE id = ?', [req.params.id], (err, result) => {
      if(err){
        res.status(404).send(`Erro: ${err}`)
      }
      res.render('form', {filme : result[0]})
    })
  }

  static async edicao(req,res){
    db.query(`UPDATE filmes SET titulo = ?, ano_lançamento = ? WHERE id = ?`,[
      req.body.titulo, req.body.ano, req.params.id],(err) => {
      if(err){
        res.status(404).send(`Erro: ${err}`)
      }
      res.redirect('/listar')
    })
  };
  static async delete(req,res){
    db.query('DELETE * FROM filme WHERE id = ?', [req.params.id],(err) => {
      if(err){
        res.status(404).send(`Erro: ${err}`)
      }else{
        res.status(200).send('ok');
      }
    })
  }
}