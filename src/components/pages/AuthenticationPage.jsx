import {Component} from "react";
import {Link} from "react-router-dom";

import "../../css/style.css"
import "../../css/Entry.css"
import axios from "axios";
import baseApiUrl from "../../globals";

class AuthenticationPage extends Component {
  constructor(props) {
    super(props);
  };

  state = {
  };

  handleSubmission(e) {
    console.log("submitted");
    e.preventDefault();
    const path = `${baseApiUrl}/auth/${this.props.step === "login" ? "login" : "register"}`

    axios.post(path, {...this.state})
      .then(response => {
        console.log(response);
        if(response.status === 201 || response.status === 200) {
          localStorage.setItem("jwt", response.data.Authorization);
          localStorage.setItem("userInfo", JSON.stringify(response.data.userInfo))
          this.props.history.replace("/");
        }
      }).catch(error => {
        console.log(error)
      });

  }

  handleChange(e) {
    let newState = {};
    newState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(newState);
  }

  getStep() {
    switch (this.props.step) {
      case "sign-up-1":
        return (
          <div className="column entry-card">
            <h1>Welcome to Survivor!</h1>
            <p>It's ok to have struggles! Sign up to share, to feel better!</p>
            <form className="column entry-form" onSubmit={this.handleSubmission.bind(this)}>
              <div className="grid-2-2">
                <label className="label">First Name</label>
                <label className="label">Last Name</label>
                <input
                  type="text"
                  name="firstname"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.firstname}
                  required
                  placeholder="Your First Name"
                />
                <input
                  type="text"
                  name="lastname"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.lastname}
                  required
                  placeholder="Your Last name"
                />
              </div>

              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange.bind(this)}
                value={this.state.username}
                required
                placeholder="Your Username"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange.bind(this)}
                value={this.state.email}
                required
                placeholder="Your Email"
              />

              <label className="label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                onChange={this.handleChange.bind(this)}
                value={this.state.phone}
                required
                placeholder="Your Phone Number"
              />

              <label className="label">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                onChange={this.handleChange.bind(this)}
                value={this.state.birthdate}
                required
                placeholder="Your birthdate"
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password}
                required
                placeholder="Your Password"
              />

              <div className="divider"></div>
              <button type="submit" className="btn btn--primary">Continue</button>
              <span className="forgot-pass">Already have an account?
                <Link to="/login"> Login! </Link></span>
            </form>
          </div>);
      case "sign-up-2":
        return (
          <div className="column entry-card">
            <h1>One More Step!</h1>
            <p>To keep our community secure and ensure you have the best experience, we need to verify your email
              address.
              We've just sent you a <strong>6-digit code</strong>. Please enter this code below to complete your sign-up
              process:</p>
            <form onSubmit={this.handleSubmission.bind(this)} className="column entry-form">
              <label className="label">Code</label>
              <input type="text" placeholder="The code sent to your email"/>
              <div className="divider"></div>
              <button className="btn btn--primary">Sign Up</button>
              <span className="forgot-pass">Already have an account?
                <Link to="/login"> Login </Link></span>
            </form>
          </div>
        )
      case "login":
      default:
        return (
          <div className="column entry-card">
            <h1>Welcome back to Survivor!</h1>
            <p> We're here, ready to support you! Sign in to your account and let's continue the journey together!</p>
            <form onSubmit={this.handleSubmission.bind(this)} className="column entry-form">
              <label className="label">Username</label>
              <input
                type="text"
                name="username"
                onChange={this.handleChange.bind(this)}
                value={this.state.username}
                required
                placeholder="Your Username"/>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange.bind(this)}
                value={this.state.password}
                required
                placeholder="Your Password"/>
              <div className="divider"/>
              <Link to="#">Forgot Password?</Link>
              <button type="submit" className="btn btn--primary">Login</button>
              <short className="forgot-pass">Don't have an account?
                <Link to="/register"> Sign up </Link>
                and join us!
              </short>
            </form>
          </div>
        );
    }
  }

  credentialsExist() {
    return (localStorage.getItem("jwt") !== null)
      && (localStorage.getItem("userInfo") !== null);
  }

  render() {
    if(this.credentialsExist()) {
      this.props.history.replace("/")
    }

    return (
      <div className="auth-section row">
        <img src={require('../../resources/LoginPic.jpg')} alt="login page"/>
        {this.getStep()}
      </div>
    )
  }

}

export default AuthenticationPage;