import server from "./server";

const HOST = "localhost";
const PORT = "3009"

server.listen(PORT, HOST, () => {
  console.log(`listening on port ${PORT}`);
});