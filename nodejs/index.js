console.log("hello world");
console.log("hello world");
console.log("hello world");
// you can use npx nodemon index.js to run the file and it will automatically restart when you make changes to the file
// you can also use npx node index.js to run the file without nodemon
const fs = require("fs");
fs.readFile("test.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
