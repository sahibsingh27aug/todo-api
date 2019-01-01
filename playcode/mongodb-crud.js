// const MongoCliect = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log("Unable To Connect To MongoDB");
    } else {
        console.log("Connected to MongoDB Server");
    }
  
/*  // Inserting the doc
        db.collection('test').insertOne({
            name: 'Sahib',
            age: 21,
            location: 'Delhi'
        }).then((results) => {
            console.log(results);
        });
*/

/* //Updating a doc 
        db.collection('test').findOneAndUpdate({
            _id: new ObjectID('5c153431014e3d1cb848c16f')
        }, {
            $set: {
                name: 'Sahib'
            },
            $inc: {
                age: +1
            }
        }, {
            returnOriginal: false
        }).then((results) => {
            console.log(results);
        });
*/

db.collection('test').findOneAndDelete({
    _id: new ObjectID('5c153431014e3d1cb848c16f')
}).then((results) => {
    console.log(results);
})





db.close();
}); 


