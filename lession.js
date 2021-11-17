// Node built-in modules 

// let fs = require('fs');

// let text = fs.readFileSync('./song.txt', {encoding: 'utf8' });
//     // Đọc 1 file 
// console.log(text);

// fs.writeFileSync('./song-2.txt', 'i am Tien anh');
    //Tạo ra một file 


//////////////////////////////////////////////////////////////////
//JSON obj 
let myDog = { name: 'Milu', age: 1, dead: false};
let myDogString = JSON.stringify(myDog);
console.log(myDogString);
//
let myCatString = '{"name": "Tom", "age": 2, "dead": true}';
let myCat = JSON.parse(myCatString);
console.log(myCat);
