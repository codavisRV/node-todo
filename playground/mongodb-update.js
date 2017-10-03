const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to database server");
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("59d2fb062efe6b17117d32e9")}, 
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }, 
    //     {
    //         returnOriginal: false
    // }).then((result) => {
    //         console.log(result);
    //     })

db.collection('Users').findOneAndUpdate(
    {_id: 123},
    {$inc: {
        age: 1
    }},
    {
        returnOriginal: false
    }

).then((results)=>{
    console.log(results);
});

    //db.close();
});
