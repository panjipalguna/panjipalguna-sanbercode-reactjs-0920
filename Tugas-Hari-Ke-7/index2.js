var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 
function readBook(time,index){
    readBooksPromise(time,books[index],function (timeLeft){
        if(timeLeft>0){
            if(index + 1 < books.length){
                readBook(timeLeft,index+1)
            }else{
                console.log("Done")
            }
          }
    }).then(function (fulfilled) {
        console.log(fulfilled);
        
    }).catch(function (error) {
        console.log(error.message);
    });
}
readBook(10000,0)