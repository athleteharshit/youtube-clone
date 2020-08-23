import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="youtube-logo"
          />
        </Link>
      </div>

      <div className="header_input">
        <input
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          alt="Harshit gupta"
          src="https://scontent.flko3-1.fna.fbcdn.net/v/t1.0-9/84649327_2575376172673763_1979434290810716160_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=psDIKLdPf84AX9Zh0VF&_nc_ht=scontent.flko3-1.fna&oh=a75e5ddd76f77e9f8ef838dabefd4e5a&oe=5F555E41"
        />
      </div>
    </div>
  );
};

export default Header;
