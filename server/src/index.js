const app = require("express")();
const server = require("http").createServer(app);
const static = require("express").static;
const join = require("path").join;
const io = require("socket.io")(server);
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const Room = require("./Room")(io);
let data = { rooms: { test: new Room("test") } };
io.use(require("./socket.js")(data, io));
app.use("/api", require("./api")(data, io));

// app.use(static(join(__dirname, "..", "..", "client", "build")));
// app.get("*", (_, res) => {
//   res.sendFile(join(__dirname, "..", "..", "client", "build", "index.html"));
// });



const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`Server is listening at http://localhost:${port}`)
);
