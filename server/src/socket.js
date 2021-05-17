const uniqid = require("uniqid");

module.exports = ({ rooms }, io) => (sock, next) => {
  console.log("Socket connected!");
  sock.on("disconnect", () => {
    console.log("Socket disconnected!");
  });

  sock.on("join room", ({ id, name }) => {
    console.log(`Joining room ${id} ${name}`)
    if (rooms.hasOwnProperty(id)) {
      let room = rooms[id];
      io.to(sock.id).emit("room joined");
      room.addUser(sock, name);
    } else io.to(sock.id).emit("room not joined", id);
  });

  next();
};
