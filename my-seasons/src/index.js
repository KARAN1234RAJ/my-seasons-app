import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { Lat: null, errMessage: null };
  // }
  state = { Lat: null, errMessage: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ Lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMessage: err.message });
      }
    );
  }
  renderContent() {
    if (this.state.errMessage && !this.state.Lat) {
      return (
        <div>
          <h1>Error: {this.state.errMessage}</h1>
        </div>
      );
    }
    if (!this.state.errMessage && this.state.Lat) {
      return (
        <div>
          <h1>
            {" "}
            <SeasonDisplay Lat={this.state.Lat} />{" "}
          </h1>
        </div>
      );
    }
    return (
      <div>
        <h1>
          <Spinner message="Loading..." />
        </h1>
      </div>
    );
  }

  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
