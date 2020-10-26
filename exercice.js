const fs = require('fs');
let file = fs.readFileSync('/Users/leolemercier/Documents/cours efrei /nodejs_codeflix/env').toString()
///console.log(file)

let regex = /.*=.*/gm;
let found = file.match(regex)// match between the file and regex 
let phpjson = 'php.json'

fs.open(phpjson, 'w+', function(err,f){ // Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
    if(err){
        return console.error(err)
    }
})
splt = found.toString().split('=')
console.log(splt)

for(let i = 0;i <found.length; i++ ){
    found[i] = found [i].replace('=',':')
   
    
}
fs.writeFile(phpjson,JSON.stringify(found),(err) =>{
    if(err) throw err;
})


console.log(found)
