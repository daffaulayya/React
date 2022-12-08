import { Component } from "react";
import { Button } from "react-bootstrap";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Welcome, {this.props.user}</h1>
        <Button variant="danger" onClick={this.props.handleLogin}>
          Log Out
        </Button>
      </>
    );
  }
}

export default DashboardPage;
