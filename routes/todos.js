import express from "express";
import data from "../data/todos.json" assert { type: "json"};

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.send("todos router is working");
});

todosRouter.get("/:id", (req, res) => {
  // console.log(data);
  const todo = data.find((element) => {
    return element.id === +req.params.id
  });
  console.log(todo);

  if (!todo) {
    res.status(404).send("This TODO doesn't exist.");
  } else {
    res.status(200).send("This TODO exists.");
  }

});

export default todosRouter;
