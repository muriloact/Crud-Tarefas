const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'M@ct2002',
    database: 'db_crudtarefas'
}); 

app.get('/', (req, res) => {
    res.json("Servidor funcionando")
});

app.get('/api/tarefaCrud', (req, res) => {
    const sql = "SELECT * FROM tarefaCrud";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/api/tarefaCrud-criar', (req, res) => {
    const sql = "INSERT INTO tarefaCrud (`tituloTarefas`, `conteudoTarefas`, `prazoTarefas`) VALUES (?)";
    const values = [
        req.body.titulo,
        req.body.descricao,
        req.body.prazo
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});
app.delete('/api/tarefaCrud-deletar/:id', (req, res) => {
    const tarefaId = req.params.id;
    const sql = "DELETE FROM tarefaCrud WHERE idTarefas = ?";
    db.query(sql, [tarefaId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.put('/api/tarefaCrud-editar/:id', (req, res) => {
    const tarefaId = req.params.id;
    const sql = "UPDATE tarefaCrud SET `tituloTarefas` = ?, `conteudoTarefas` = ?, `prazoTarefas` = ? WHERE idTarefas = ?";
    const values = [
        req.body.titulo,
        req.body.descricao,
        req.body.prazo,
        tarefaId
    ];
    db.query(sql, values, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});
app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000")
});