const express = require("express");
const router = express.Router();
const Todo = require("../models/todoList");
const mongoose = require("mongoose");

const getTodo = (req, res) => {
  Todo.find({}, function (err, data) {
    if (err) {
      next;
    } else {
      return res.json({
        data: data,
      });
    }
  });
};

const createTodo = (req, res, next) => {
  const reqBody = req.body;
  console.log(reqBody.title);
  let newTodo = new Todo({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    checked_date: req.body.checked_date,
  });
  newTodo
    .save()
    .then((data) => {
      res.status(201).json({
        message: "Success",
        data: data,
      });
    })
    .catch(next);
};
const updateTodo = (req, res, next) => {
  Todo.findById({ _id: `${req.params.id}` }, function (err, data) {
    if (err) {
      next;
    } else {
      return res.json({ data: data });
    }
  });
};
const deleteTodo = (req, res, next) => {
  let todoTitle = {
    title: "homework",
  };
  Todo.findOneAndDelete({ name: req.body.title }, todoTitle, (err, data) => {
    if (err) next;
    res.send("delete");
  });
};

module.exports = { getTodo, createTodo, deleteTodo, updateTodo };
