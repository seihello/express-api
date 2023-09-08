import express from "express";

const server = express();

server.get("/", (req, res) => {
  console.log("/ is working");
  res.send("/ is working");
});


export default server;