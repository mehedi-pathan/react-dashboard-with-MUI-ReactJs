import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
             <LanguageIcon className="icon"/> English
          </div>
          <div className="item">
             <BedtimeOutlinedIcon className="icon"/>
          </div>
          <div className="item">
             <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
             <NotificationsNoneOutlinedIcon className="icon"/>
             <div className="counter">1</div>
          </div>
          <div className="item">
             <ChatBubbleOutlineOutlinedIcon className="icon"/>
             <div className="counter">2</div>
          </div>
          <div className="item">
             {/* <ListIcon className="icon"/> */}
             <img src="https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
