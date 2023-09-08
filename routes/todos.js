import express from "express";
import todos from "../data/todos.json" assert { type: "json"};

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.send("todos router is working");
});

todosRouter.get("/:id", (req, res) => {
  const todo = todos.find((element) => element.id === +req.params.id);

  if (!todo) {
    res.status(404).send("This TODO doesn't exist.");
  } else {
    res.status(200).send(todo);
  }

});

export default todosRouter;
