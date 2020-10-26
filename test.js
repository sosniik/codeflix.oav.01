var fs = require('fs'); 
var users = require('./names'); 

users.brad = { 
    name: 'brad', 
    lastName: 'pitt' 
} 

var string = JSON.stringify(users,null,'\t'); 

fs.writeFile('./names.json',string,function(err) { 
    if(err) return console.error(err); 
    console.log('done'); 
}) 
