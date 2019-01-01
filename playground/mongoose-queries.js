const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// var id = "5c28d5b13fdffdfc18416e5111";

var U_id = "5c154c300650bce42ab95ceb";

// if (!ObjectId.isValid(id)) {
//     console.log("Id is not valid");
// }



// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log("Todos", todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log("Todo", todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log("Id not found");
//     }
//     console.log("Todo By Id", todo);
// }).catch((e) => console.log(e));


User.findById(U_id).then((user) => {
    if (!user) {
        return console.log("Unable to find user")
    }
    console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));