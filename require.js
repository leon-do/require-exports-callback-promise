var myStuff = require('./exports.js')


console.log(myStuff.myString) //aString



myStuff.myFunction('send2Stuff');






myStuff.myCallback(function(data){
    console.log(data) //aCallback
})