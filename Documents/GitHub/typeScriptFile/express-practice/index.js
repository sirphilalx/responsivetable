const express = require("express");
const app = express();

app.use(express.json());

const users = [
  { id: 1, name: "John", email: "userjohn@gmail.com" },
  { id: 2, name: "Sarah", email: "usersarah@gmail.com" },
  { id: 3, name: "Ebike", email: "userebike@gmail.com" },
  { id: 4, name: "Phil", email: "userphil@gmail.com" },
  { id: 5, name: "Oke", email: "useroke@gmail.com" },
];

// root directory or homepage directory
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// getting users from database
app.get("/api/users", (req, res) => {
  res.send(users);
});

// adding users to database
app.post("/api/users", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(user);
  res.send(user);
});

// getting individual users from database
app.get("/api/users/:id", (req, res) => {
  const user = users.find((users) => users.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("user with the given ID was not found");
  res.send(user);
});

// modifying individual users from database
app.put("/api/users/:id", (req, res) => {
  const user = users.find((users) => users.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("user with the given ID was not found");

  user.name = req.body.name;
  user.email = req.body.email;
  res.send(user);
});

// Deleting individual users from database
app.delete("/api/users/:id", (req, res) => {
  const user = users.find((users) => users.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).send("user with the given ID was not found");

  const index = users.indexOf(user);
  users.splice(index, 1);

  res.send(user);
});

// PORT
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}...`);
});
