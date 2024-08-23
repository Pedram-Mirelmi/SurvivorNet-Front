import {Component} from "react";
import "../css/style.css"
import "../css/profile.css"
import axios from "axios";
import baseApiUrl from "../globals";

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state.isMyProfile = props.userInfo.username === JSON.parse(localStorage.getItem("userInfo")).username;

  }

  state = {
    isMyProfile: false,
    following: false
  }

  componentDidMount() {
    const myUsername = JSON.parse(localStorage.getItem("userInfo")).username;
    axios.get(baseApiUrl + "users/follow-status",
      {headers: {Authorization: localStorage.getItem("jwt")},
      params: {follower: myUsername, followee: this.props.userInfo.username}}
    )
    .then(response =>{
      this.setState({isMyProfile: this.state.isMyProfile, following: response.data.status})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className="card column profile-header-card">
        <img className="profile-cover-img" src={require("../resources/sample-profile-cover.png")}/>
        <img className="profile-photo" src={require("../resources/sample-profile-photo.png")}/>
          <div className="row row-right">
            <div className="divider"></div>
            {this.state.isMyProfile ? <button className="btn btn--secondary btn-profile-header">Edit Profile</button> :
              <button className="btn btn--secondary">{this.state.following ? "Unfollow" : "Follow"}</button>}
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{userInfo.firstname + " " + userInfo.lastname}</h1>
            <h3 className="profile-username">@{userInfo.username}</h3>
            <p className="profile-biography">{userInfo.bio}</p>
            <div className="row profile-follow-info">
              <div className="row row-left gap-8"><strong>{userInfo.numberOfFollowers} </strong> Following</div>
              <div className="row row-left gap-8"><strong>{userInfo.numberOfFollowers} </strong> Followers</div>
            </div>
          </div>
      </div>
    );
  }
}

export default ProfileHeader;