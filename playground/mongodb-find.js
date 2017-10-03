const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to database server");
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').find({completed: true}).count().then((count) =>{
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // });
    // db.collection('Todos').find({
    //     _id: new ObjectID('59d2e487b21ab60d3df4a136')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch todos', err)
    // });

    db.collection('Users').find({age: 29}).toArray().then((count) => {
        console.log(count);
    }, (err) => {
        console.log('failed');
    })

    // db.close();
});
