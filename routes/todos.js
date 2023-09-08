import express from "express";
const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.send("todos router is working");
});

export default todosRouter;
