const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log("Unable To Connect To MongoDB");
    } else {
        console.log("Connected to MongoDB Server");
    }

    // db.collection("Todos").findOneAndUpdate({
    //     _id: new ObjectID('5c152dff9f2361a227dcaa23')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5c0c0a97f45421204044b087')
    // }, {
    //     $set: {
    //         name: 'Sahib'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5c0c0a97f45421204044b087')
    // }, {
    //     $inc: {
    //         age: +1
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    // Set & Delete in one command
    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID('5c0c0a97f45421204044b087')
    // }, {
    //     $set: {
    //         name: 'Sahib'
    //     },
    //       $inc: {
    //         age: +1
    //   }
    // }, {
    //     returnOriginal: false
    // }).then((results) => {
    //     console.log(results);
    // });

    



    //db.close();

}); 