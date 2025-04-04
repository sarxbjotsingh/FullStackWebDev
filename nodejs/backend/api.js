const express = require("express");
const app = express();
app.use(express.json());
let users = [{ id: 1, name: "Deepak" }];
app.get("/users", (req, res) => res.json(users));
app.post("/users", (req, res) => {
  users.push({ id: users.length + 1, name: req.body.name });
  res.send("User added!");
});
app.listen(3000, () => console.log("Server running on port 3000"));
