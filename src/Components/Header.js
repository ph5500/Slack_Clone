import React from "react";
import "../Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutLineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt="Phil Fives" src="" />
        <AccessTimeIcon />

        {/* Avatar for logged in user  */}
        {/* Time icon */}
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="What're you looking for?" />
      </div>
      <div className="header__right">
        <HelpOutLineIcon />
        {/* help icon  */}
      </div>
    </div>
  );
}

export default Header;
