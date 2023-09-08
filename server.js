import express from "express";
import todosRouter from "./routes/todos.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true })); // allow for getting data as JSON with req.body

server.use("/todos", todosRouter);

server.get("/", (req, res) => {
  console.log("/ is working");
  //res.send("/ is working");
});


export default server;