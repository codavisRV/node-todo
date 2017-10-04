const express = require('express');
const bodyParser = require('body-parser');

var {ObjectID} = require('mongodb')
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
            res.send(doc
        )}, (e) => {
            res.status(400).send(e)
        }
    );
});


app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, () => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log(id)
    //validate the id
        // 404 - send()
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if (!todo) {
            return res.status(404).send();
        } 
        res.send({todo});
    },()=>{
        return res.status(404).send();
    })
    //findById
        //suc
            //if todo send it 
            // if no todo send 404 -- empty body
        //err
            //400 - and send()
})


app.listen(port, () => {
    console.log(`Starting on port ${port}`);
});

module.exports = {app}; 