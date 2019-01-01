// const MongoCliect = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log("Unable To Connect To MongoDB");
    } else {
        console.log("Connected to MongoDB Server");
    }

// db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
// }, (err, result) => {
//     if (err) {
//         return console.log("Unable to connect to Todos", err);
//     }
    
//     console.log(JSON.stringify(result.ops, undefined, 2));

// });

db.collection('Users').insertOne({
    name: 'Sahib',
    age: 21,
    location: 'Delhi'
}, (err, result) => {
    if(err){
        return console.log("Unable to insert user", err);
    }
    console.log(result.ops[0]._id.getTimestamp());
});



db.close();
}); 


/* 
MongoDB Commands :
    1. insertOne() : To add new doc
    
    2. results.ops() : To pull, all array documents {
        
        console.log(result.ops) = All documents of array
        console.log(result.ops[0]) = only the first dcument
        console.log(result.ops[0]._id) = obj id of 1st doc of array
    }
    
    3. Object Destruring:

    var user = {name:'sahib', age:21};
    var {name} = user;
    console.log(name);  

    4. To Check the id

    var obj = new ObjectID();
    console.log(obj);




Connection Commands :
    1. mongod.exe --dbpath /Users/SAHIB/mongo-data
    2. mongo.exe 

SQL & Mongo

SQL have Tables, Rows, Columns
MongoDB has Collection, Fields, Propertis, Object

_id = 12 bytes ( 1st 4: timestamp, next 3: M/C Identifies, next 2: Process id, last 3: just a random value)

*/