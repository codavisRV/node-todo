const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("unable to connect to database server");
    }
    console.log('Connected to MongoDB server');
    
    //delete many
    // db.collection('Todos').deleteMany({text: 'Things to do'}).then((res)=>{
    //     console.log(res);
    // });


    //deleteOne
    // db.collection('Todos').deleteOne({text: 'More things to do'}).then((res) => {
    //     console.log(res);
    // });


    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // } );

    //delete many
    db.collection('Users').deleteMany({name: 'Steven'}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59d2e5ff27dedc0db4fd85ff')}).then((result) => {
        console.log(result);
    });

    //db.close();
});
