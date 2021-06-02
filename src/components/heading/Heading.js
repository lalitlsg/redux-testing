import { Component } from "react";

class Heading extends Component {
  state = {
    name: false,
  };

  showName = () => {
    this.setState({ name: true });
  };

  render() {
    return (
      <div>
        This is Heading
        <h2 data-test="name">{this.state.name && "Lalit"}</h2>
        <div>
          <button onClick={this.showName} data-test="show-name-btn">
            Show Name
          </button>
        </div>
      </div>
    );
  }
}

export default Heading;
