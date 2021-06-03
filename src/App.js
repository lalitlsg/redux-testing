import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Heading from "./components/heading/Heading";
import { shwoHeading, hideHeading, fetchNames } from "./store/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchNames();
  }
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

export default connect(mapStateToProps, {
  shwoHeading,
  hideHeading,
  fetchNames,
})(App);
