import { Component } from "react";
import { Button } from "react-bootstrap";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      credential: {
        email: "daffa",
        password: "daffa1",
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    // console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    if (
      this.state.email === this.state.credential.email &&
      this.state.password === this.state.credential.password
    ) {
      this.props.handleLogin(this.state.email);
    } else {
      alert("Incorrect username or password");
    }
  }
  setAlertMessage(message) {
    this.setState({ alertMessage: message });
  }

  render() {
    return (
      <>
        <div className="row d-flex justify-content-md-center align-items-center">
          <div className="card" style={{ width: "24rem" }}>
            <div className="card-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={this.handleInputChange}
                    value={this.state.email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.password}
                    onChange={this.handleInputChange}
                  />
                </div>

                <Button type="submit" className=" btn btn-primary">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginPage;
