import { Component } from "react";
import DashboardPage from "./DashboardPage";
import LoginPage from "./LoginPage";

class Web extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      user: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(value) {
    console.log("value", value);
    this.setState({ isLoggedIn: !this.state.isLoggedIn, user: value });
  }

  render() {
    return (
      <>
        {this.state.isLoggedIn ? (
          <DashboardPage
            user={this.state.user}
            handleLogin={this.handleLogin}
          />
        ) : (
          <LoginPage user={this.user} handleLogin={this.handleLogin} />
        )}
      </>
    );
  }
}

export default Web;
