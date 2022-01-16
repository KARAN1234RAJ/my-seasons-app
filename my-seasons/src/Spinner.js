import React from "react";
import { Loader, Dimmer, Segment } from "semantic-ui-react";

const Spinner = (props) => {
  return (
    <div>
      <div className="ui active transition visible dimmer">
        <div className="content">
          <div className="ui loader">{props.message}</div>
        </div>
      </div>
    </div>
  );
};
Spinner.defaultProps = {
  message: "LoadingDefault.....",
};

export default Spinner;
