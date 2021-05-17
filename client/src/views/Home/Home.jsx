import React, { useState } from "react";
import "./Home.css";
import ikonka from "./img/ikonka.png";
import { Link } from "react-router-dom";
import Roomlist from "components/Roomlist/Roomlist";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const handleAddRoom = () => {
    setRooms([
      ...rooms,
      {
        userName: "abcd",
        userCount: 10,
        roomID: "test",
        title: "Example video",
        thumbnail: "https://img.youtube.com/vi/licFm9qVyy4/hqdefault.jpg",
      },
    ]);
  };
  return (
    //[rooms, setRooms] = useState();
    <div className="homeBackgroundContainer">
      <div className="homeMiddleContainer">
        <div className="homeMiddleText">
          <div className="homeMiddleBox">
            <img src={ikonka}></img>
            <h1>Welcome to ChatTogetherPlayer!</h1>
          </div>
        </div>
        <button className="homeCreateRoomButton">
          <Link className="homeCreateRoomLink" to="/Room/test">
            Create Room
          </Link>
        </button>
      </div>
      <div className="homePublicRoomsContainer">
        <h1>Featured rooms</h1>
        <div className="homePublicRoomLists">
          <Roomlist
            onAddRoom={handleAddRoom}
            roomList={rooms}
            title="Most popular"
          />
          <Roomlist onAddRoom={handleAddRoom} roomList={rooms} title="Newest" />
          <Roomlist onAddRoom={handleAddRoom} roomList={rooms} title="Oldest" />
        </div>
      </div>
    </div>
  );
};

export default Home;
