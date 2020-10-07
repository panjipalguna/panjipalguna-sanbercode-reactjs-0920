// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function readingBook(time,index){
  readBooks(time,books[index],function (timeLeft){
    if(timeLeft>=0){
      if(index + 1 < books.length){
        readingBook(timeLeft,index+1)
      }else{
          console.log("Done")
      }
    }
  })
}
readingBook(10000,0)