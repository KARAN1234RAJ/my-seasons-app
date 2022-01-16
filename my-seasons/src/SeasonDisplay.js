import React from "react";
import { Icon } from "semantic-ui-react";
import "./SeasonDisplay.css";

const seasonConfig = {
  Summer: {
    text: "Let's Heat the Bitch",
    iconName: "sun",
  },
  Winter: {
    text: "It is very cold",
    iconName: "snowflake",
  },
};

const getSesssion = (Lat, month) => {
  if (month > 2 && month < 9) {
    return Lat > 0 ? "Summer" : "Winter";
  } else {
    return Lat > 0 ? "Winter" : "Summer";
  }
};
const SeasonDisplay = (props) => {
  // console.log(props.Lat);
  const season = getSesssion(props.Lat, new Date().getMonth());
  // console.log(season);
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <Icon className={`icon-left massive ${iconName}`} />
      <h1>{text}</h1>
      <Icon className={`icon-right massive ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
