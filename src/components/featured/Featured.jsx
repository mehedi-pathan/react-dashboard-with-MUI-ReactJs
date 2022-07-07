import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  MoreVert,
} from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={70}
            strokeWidth={5}
            text="70%"
            styles={buildStyles({
              strokeLinecap: "round",
              textSize: "20px",
              textColor: "#a8a9a9",
              pathColor: `#66cb9a`,
              trailColor: "white",
            })}
          />
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$120</p>
        <p className="desc">
          Previous transaction proccessing. Last payment may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
