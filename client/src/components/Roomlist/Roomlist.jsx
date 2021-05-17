import React from "react";
import "./Roomlist.css";
import Scrollable from "components/Scrollable/Scrollable";
import Roomwindow from "components/Roomwindow/Roomwindow";

const Roomlist = ({ onAddRoom, roomList, title }) => {
  const handleClick = () => {
    onAddRoom();
  };
  return (
    <div className="roomListContainer">
      <h2>{title}</h2>
      <Scrollable
        className="roomListBox"
        scrollColor="rgb(12,12,12)"
        scrollBorder="rgb(55,55,55)"
        scrollWidth="10px"
        scrollRadius="25px"
        transitionDuration="0.5s"
        transitionDelay="1.5s"
      >
        {roomList.map(
          ({ userName, userCount, userLimit, roomID, title, thumbnail }) => (
            <Roomwindow
              userName={userName}
              userCount={userCount}
              userLimit={userLimit}
              roomID={roomID}
              title={title}
              thumbnail={thumbnail}
            />
          )
        )}
      </Scrollable>
      <button className="roomListBtn" onClick={handleClick}>
        +
      </button>
    </div>
  );

  //<Roomwindow />
};

export default Roomlist;
