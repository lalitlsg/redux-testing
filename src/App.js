import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Heading from "./components/heading/Heading";
import { shwoHeading, hideHeading } from "./store/actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.props.heading && <Heading />}
          <button onClick={this.props.shwoHeading} data-test="show-btn">
            Show Heading
          </button>
          <button onClick={this.props.hideHeading}>Hide Heading</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { heading } = state;
  return { heading };
};

export default connect(mapStateToProps, { shwoHeading, hideHeading })(App);
