const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log("Unable To Connect To MongoDB");
    } else {
        console.log("Connected to MongoDB Server");
    }

    // db.collection('Todos').find({
    //         // _id: new ObjectID("5c0c09d560be8f1940f81e36")
    //     }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch Todos", err)
    // });

    // db.collection('Todos').find().count().then((count) => {
    // console.log(`Count: ${count}`);
    // }, (err) => {
    // console.log("Unable to fetch Todos", err)
    // });

    // db.collection("Users").find({
    //     name: "Sahib"
    // }).count().then((count) => {
    //     console.log(`Count: ${count}`);
    // }, (err) => {
    //     console.log("Unable To fetch data", err);
    // });

    db.collection('Users').find({name:'Sahib'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });



db.close();
}); 