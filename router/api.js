const express = require("express");
const router = express.Router();
const Blog = require("../models/todoList");
const { ObjectId } = require("mongodb");
const { json } = require("express/lib/response");
const todoList = require("../todo-backend/todo");

router.get("/todo", todoList.getTodo);
router.post("/todo", todoList.createTodo);
router.post("/todo", todoList.updateTodo);
router.delete("/todo", todoList.deleteTodo);

module.exports = router;
