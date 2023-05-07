const { log } = require("console");
const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;

// Create file
// fs.writeFileSync(filePath,'this is a simple text file')

// Read file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });

//Update file
// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if (!err) {
//         console.log("file is update");
//     }
// })

//Rename file
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//   if (!err) {
//     console.log("file is update");
//   }
// });

//Delete file
fs.unlinkSync(`${dirPath}/fruits.txt`)