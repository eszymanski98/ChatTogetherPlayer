import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Navbar from "components/Navbar/Navbar.jsx";
import Playlist from "components/Playlist/Playlist.jsx";
import Videoplayer from "components/Videoplayer/Videoplayer.jsx";
import Chat from "components/Chat/Chat.jsx";
import "./Room.css";
import socket from "socket";

const Room = () => {
  const { id } = useParams();

  useEffect(() => {
    socket.on("room joined", () => {
      console.log("joined");
    });
    socket.on("room not joined", () => {
      console.log("not joined");
    });
    socket.emit("join room", { id: id, name: "siema" });
  }, []);

  return (
    <div className="rmContainer">
      <Navbar />
      <div className="rmInnerContainer">
        <div className="rmPlaylist">
          <Playlist />
        </div>
        <div className="rmPlayer">
          <Videoplayer />
        </div>
        <div className="rmChat">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Room;
