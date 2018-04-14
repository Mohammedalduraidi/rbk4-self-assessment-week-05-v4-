var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var sequelize = new Sequelize('test', 'test', null, { dialect: 'sqlite', storage: './db.test.sqlite' });

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

/*  Create a '/users' route that responds to 
    a GET request with all users in the database */
app.get('/users', function (req, res) {
  // i need to fetch the username form Users table

})



app.get('/', function (req, res) {
//.fetch().then()!!

// 	var query = "SELECT * FROM Users";
 
 
// User(query, function(err, user) {
    
//     if (err) {
        
//         res.status(404)
//         res.send(err)
         
//     }
    
//      res.send(user)       
// });

})


module.exports = { 
  app: app,
  User: User
};
