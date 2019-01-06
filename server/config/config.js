var env = process.env.NODE_ENV || 'development';

if (env === 'test' || env === 'development') {
    var config = require('./config.json');
    var envConfig = config[env];

    Object.keys(envConfig).forEach((key) => {
        process.env[key] = envConfig[key];
    });
}



// if (env === "development") {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }
// else if (env === "test") {
//     process.env.PORT = 3000;
//     process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }

// console.log("******* env *****", env);

/* For Production Commands :
    heroku config : Show all variables at present
    heroku config:set NAME=Sahib = To set a variable
    heroku config:unset NAME = To unset a variable
    heroku config:get Name = To get a value of variable

*/