import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import LanguageIcon from "@mui/icons-material/Language";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Tooltip, Zoom } from "@mui/material";
import "./navbar.scss";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="SearchIcon" />
        </div>
        <div className="items">
          <Tooltip TransitionComponent={Zoom} title="Change Languge" arrow>
            <div className="item">
              <LanguageIcon className="icon" /> English
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Change Mode" arrow>
            <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}>
              <BedtimeOutlinedIcon className="icon" />
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Toggle Fullscreen" arrow>
            <div className="item">
              <FullscreenExitIcon className="icon" />
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Notification" arrow>
            <div className="item">
              <NotificationsNoneOutlinedIcon className="icon" />
              <div className="counter">5</div>
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Messages" arrow>
            <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <div className="counter">99</div>
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Menu" arrow>
            <div className="item">
              <ListOutlinedIcon className="icon" />
            </div>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Profile" arrow>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg"
                alt=""
                className="avatar"
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
