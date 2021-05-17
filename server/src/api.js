const api = require("express").Router();
const uniqid = require("uniqid");

module.exports = ({ rooms }, io) => {
  const Room = require("./Room")(io);

  api.get("/", (req,res) => {
    res.send("siema")
  })

  api.get("/rooms", (req, res) => {
    res.send(Object.values(rooms).map((v) => v.info()));
  });

  api.post("/createRoom", (req, res) => {
    let id = uniqid.time();
    rooms[id] = new Room(id);
    io.emit("new room", id);
    res.send({ id });
  });

  return api;
};
