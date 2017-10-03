const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to database server");
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'More things to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert todo:', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Steven',
    //     age: 29,
    //     location: 'Charlotte'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Trouble adding user to the database");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    
    db.close();
});
