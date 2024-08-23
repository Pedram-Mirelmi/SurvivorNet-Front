import {Component} from "react";
import {Link} from "react-router-dom";
import baseApiUrl from "../../globals";
import axios from "axios";


export default class EditProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...JSON.parse(localStorage.getItem("userInfo"))
    }
  }

  state = {}

  handleSubmission(e) {
    console.log("submitted");
    e.preventDefault();
    const username = JSON.parse(localStorage.getItem("userInfo")).username;
    axios.put(baseApiUrl + "users/" + username, {...this.state}, {headers: {Authorization: localStorage.getItem("jwt")}})
      .then(response => {
        console.log(response);
        if(response.status === 201 || response.status === 200) {
          localStorage.setItem("userInfo", JSON.stringify(response.data))
          this.props.history.replace("/");
        }
      }).catch(error => {
      console.log(error)
    });
  }

  handleChange(e) {
    let newState = {...this.state};
    newState[e.currentTarget.name] = e.currentTarget.value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="column entry-card">
        <h1>Edit your profile</h1>
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
          <button type="submit" className="btn btn--primary">Save</button>
        </form>
      </div>
    );
  }

}