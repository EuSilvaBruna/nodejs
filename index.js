const express = require('express')
const app = express();
app.use(express.json())

/* 
    * GET: buscar/listar uma informação no backend
    * POST: criar uma informação no backend
    * PUT: alterar as informações no backend
    * DELETE: apagar informações no backend
*/

/***
 * Query: paramentros nomeados enviados na rota após o simbolo de ?
 * Route params: parametros para identificação de recurso()
 * Request Body: corpo da requisição: nome, email, etc
*/
//http://localhost:3001/users

//http://localhost:3001/users?user=bruna&idade24

//http://localhost:3001/users
app.get('/users' , (req, res) =>{
    const params = req.query;
    console.log(params)
    res.json({
        nome:'Bruna',
        empresa:'UESB'
    })
})

//http://localhost:3001/users
app.post('./users', (req,res) =>{
    res.json({
        nome:'Bruna',
        empresa: 'UESB'
    })
})

//http://localhost:3001/users/10
app.post('./users:identificador', (req,res) =>{
    const params = req.body;
    console.log(params)
    res.json({
        nome:'Bruna',
        empresa: 'UESB'
    })
})

//http://localhost:3001/users
app.post('/user' , (req, res) =>{
    const params = req.body;
    console.log(params)
    res.json({
        id: '1234'
    })
})
app.listen(3001);
