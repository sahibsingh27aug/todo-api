const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

// Todo.remove({}) 
// Todo.findOneAndRemove({_id: ""})
// Todo.findByIdAndRemove('bhbdb')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove('5c2d0e4e71bab6990cdc5579').then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove({_id: "5c2d0e4e71bab6990cdc5579"}).then((todo) => {
    console.log(todo);
});
