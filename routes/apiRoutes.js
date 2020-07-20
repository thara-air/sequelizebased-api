const express = require("express");
const router = express.Router();
const db = require("../models");

// get all todos
router.get("/posts", (req, res) => {
  db.Todo.findAll().then(todos => res.send(todos));
});

// post new todo
router.post("/new", (req, res) => {
  db.Todo.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    gender:req.body.gender,
    dob:req.body.dob,
    email:req.body.email,
    status:req.body.status,

  }).then(submitedTodo => res.send(submitedTodo));
});

// get single todo by id
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id
    }
  }).then(todo => res.send(todo));
});
// delete todo
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => res.send("success"));
});

// edit a todo
router.put("/edit", (req, res) => {
  db.Todo.update(
    {
      text: req.body.text
    },
    {
      where: { id: req.body.id }
    }
  ).then(() => res.send("success"));
});

module.exports = router;
