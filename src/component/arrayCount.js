import { React } from "react";
import PropTypes from "prop-types";
import "../styles.css";

const ArrayCount = ({ colors, index, onCountClick }) => {
  return (
    <header>
      <div
        className="colorArray"
        onClick={() => {
          let obj = {
            color: colors.color,
            count: colors.count + 1,
            index: index
          };
          onCountClick(obj);
        }}
      >
        <span
          className="colorName"
          style={{
            backgroundColor: colors && colors.color ? colors.color : "grey"
          }}
        >
          {colors.color}
        </span>
        {colors.count ? <span>{"(" + colors.count + ")"}</span> : ""}
      </div>
    </header>
  );
};
ArrayCount.propTypes = {
  colors: PropTypes.shape({
    color: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired
  }),
  index: PropTypes.number.isRequired,
  onCountClick: PropTypes.func.isRequired
};

export default ArrayCount;
