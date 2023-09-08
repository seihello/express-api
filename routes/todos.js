import express from "express";
//import data from "../data/todos.json" assert { type : "json"};

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.send("todos router is working");
});

todosRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
});

export default todosRouter;
