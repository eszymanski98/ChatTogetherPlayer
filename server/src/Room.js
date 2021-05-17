const hsl2rgb = require("./color-convert");

module.exports = (io) => {
  class Room {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.chat = [];
      this.users = {};
      this.playlist = [];
      this.history = [];
      this.video = {
        url: "",
        time: "",
        maxTime: "",
        uID: 0,
      };
    }

    emitUsers() {
      io.to(this.id).emit("users", this.users);
    }

    setEvents(sock) {
      sock.join(this.id);
      io.to(sock.id).emit("chatHistory", this.history);

      sock.on("chatMsg", (msg) => {
        const { name, color } = this.users[sock.id];
        this.history.push({ name, color, msg });
        io.to(this.id).emit("chatMsg", { name, color, msg });
      });
      sock.on("disconnect", () => {
        this.removeUser(sock);
      });
    }

    addUser(sock, name) {
      let user = { name: name, color: this.getRandomColor() };
      this.users[sock.id] = user;
      this.setEvents(sock);
    }

    getRandomColor() {
      let [h, s, l] = [
        (Math.round(Math.random() * 100 * 137.508) % 360)/360,
        Math.round(Math.random() * 30 + 40)/100,
        Math.round(Math.random() * 25 + 55)/100,
      ];
      console.log(h,s,l)
      return hsl2rgb(h, s, l);
    }

    removeUser(sock) {
      delete this.users[sock.id];
      this.emitUsers();
    }

    info() {
      return {
        id: this.id,
        name: this.name,
        users: Object.keys(this.users).length,
      };
    }
  }

  return Room;
};
