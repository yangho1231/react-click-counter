import { useState } from "react";
import ArrayCount from "./arrayCount";

const ArrayCounts = () => {
  const colorArray = [
    {
      color: "RED",
      count: 0
    },
    {
      color: "YELLOW",
      count: 0
    },
    {
      color: "GREEN",
      count: 0
    },
    {
      color: "BLUE",
      count: 0
    }
  ];
  const [colorArrays, setColorArray] = useState(colorArray);
  const increaseCount = async (colorObj) => {
    const cloneArray = Object.assign([], colorArrays);
    const newColorObject = { color: colorObj.color, count: colorObj.count };
    cloneArray[colorObj.index] = newColorObject;
    setColorArray(cloneArray);
  };
  return (
    <>
      {colorArrays.map((colors, index) => (
        <ArrayCount
          key={index}
          index={index}
          colors={colors}
          onCountClick={increaseCount}
        />
      ))}
    </>
  );
};

export default ArrayCounts;
