import express from "express";
import todos from "../data/todos.json" assert { type: "json"};
import { ChatGPTAPI } from 'chatgpt'
import env from "dotenv";

env.config();

// getRandomText();


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

async function getRandomText() {
  const api = new ChatGPTAPI({
    apiKey: process.env.CHAT_GPT_API_KEY
  })

  const res = await api.sendMessage('Make me sample article with about 30 words')
  console.log(res.text)
}

export default todosRouter;
