import React from "react";
import "./Roomwindow.css";
import { Link } from "react-router-dom";

const Roomwindow = ({ userName, userCount, roomID, title, thumbnail }) => (
  <div className="Roomwindowcontainer">
    <div
      className="roomWindowbackgroundimg"
      style={{
        backgroundImage: 'url("' + thumbnail + '")',
      }}
    ></div>

    <div className="Roomwindowtext">
      <div className="roomWindowToptext">
        {userName}'s room
        <div className="Roomwindowusersnumbertext">{userCount} users</div>
      </div>

      <div className="Roomwindowtitle">{title}</div>
      <div className="Roomwindowbutton">
        <button className="Roomwindowjoinroombtn">
          <Link className="rwBtnLink" to={"/Room/" + roomID}>
            →
          </Link>
        </button>
      </div>
    </div>
  </div>
);

export default Roomwindow;
