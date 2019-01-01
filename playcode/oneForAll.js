var {mongoose} = require('./db/mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: '1',
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// newTodo.save().then((doc) => {
//     console.log("Saved Todo",doc);
// }, (e) => {
//     console.log("Unable to add Todo");
// });

// todo2.save().then((doc) =>{
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log("Unable to add todo");
// })

var Users = mongoose.model('Users', {

    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
   
});

var newUser = new Users({
    email: '   sahib@gmail.com   '
});


newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log("Unable to create user ", e);
});