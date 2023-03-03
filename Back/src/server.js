var http = require("http");
var fs = require("fs");
const getCharById = require("./controllers/getCharById");
const getCharDetails = require("./controllers/getCharDetails");

const PORT = 3002;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let id = req.url.split("/").at(-1);

    if (req.url.includes("onsearch")) {
      getCharById(res, id);
    }
    if (req.url.includes("detail")) {
      getCharDetails(res, id);
    }
  })
  .listen(PORT, "localhost");
