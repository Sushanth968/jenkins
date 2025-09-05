const express = require("express");
const app = express();

let todos = []; // Dynamic storage

app.use(express.json());
app.use(express.static("public")); // Serve frontend files

// API to add todo
app.post("/add", (req, res) => {
  const { todo } = req.body;
  todos.push(todo);
  res.json({ todos });
});

// API to list todos
app.get("/list", (req, res) => {
  res.json({ todos });
});

app.listen(3000, () => console.log("Server running on port 3000"));
