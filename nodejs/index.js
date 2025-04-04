console.log("hello world");
console.log("hello world");
console.log("hello world");
// you can use npx nodemon index.js to run the file and it will automatically restart when you make changes to the file
// you can also use npx node index.js to run the file without nodemon
// const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("Current Directory:", __dirname);
// console.log("Current File:", __filename);
// setTimeout(() => console.log("Hello after 2 seconds"), 2000);
const add = require("./math");
console.log(add(5, 3)); // Output: 8
// const fs = require("fs");
// fs.readFile("test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// const fs = require("fs");
// fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
//   if (err) throw err;
//   console.log("File written successfully");
// });
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js!");
});
server.listen(3000, () => console.log("Server running on port 3000"));
