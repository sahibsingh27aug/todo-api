const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        console.log("Unable To Connect To MongoDB");
    } else {
        console.log("Connected to MongoDB Server");
    }

    // Delete many ()
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // Delete One()
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // Find One And Delete = Returns the deleted doc
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // Challenge
    // db.collection('Users').deleteMany({name: 'Sahib'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c0eba0f83607b37e07dd97c')}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //db.close();

}); 