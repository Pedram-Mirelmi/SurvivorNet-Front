import {Component} from "react";
import PageHeader from "../pageHeader";
import PostList from "../postList";
import axios from "axios";
import ProfileHeader from "../profileHeader";
import Page from "./Page";
import Feed from "../feed";
import baseApiUrl from "../../globals";
import LoadingProfileHeader from "../loading-components/loadingProfileHeader";
import LoadingPost from "../loading-components/loading-post";


class ProfilePage extends Component {

  constructor(props) {
    super(props);
    if(props.match.params.username === undefined) { // my profile
      this.state.headerLoaded = true;
      this.state.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    } else {
      this.state.userInfo.username = props.match.params.username;
    }
  }

  state = {
    posts: [],
    lastChunk: 0,
    headerLoaded: false,
    postsLoaded: false,
    userInfo: {}
  }

  componentDidMount() {
    if(!this.state.headerLoaded) {
      this.getUserInfo();
    }
    if(!this.state.postsLoaded) {
      this.getPosts();
    }
  }

  getUserInfo() {
    console.log("getting userInfo");
    axios.get(baseApiUrl + "users/" + this.state.userInfo.userinfo,
      {headers: {Authorization: localStorage.getItem("jwt")}})
      .then(response => {
        console.log("got userInfo");
        console.log(response);
        this.setState({userInfo: response.data, headerLoaded: true})
      })
      .catch(error => {
        console.log(error);
      })
  }

  getPosts() {
    console.log("getting posts");
    axios.get(baseApiUrl + "users/" + this.state.userInfo.username + "/posts", {params: {"chunk": this.state.lastChunk}, headers: {Authorization: localStorage.getItem("jwt")}} )
      .then((response) => {
        if(response.status === 200) {
          console.log("got posts");
          console.log(response);
          this.setState({
            posts: [...this.state.posts, ...response.data],
            lastChunk: this.state.lastChunk + 1,
            postsLoaded: true
          });
        }
      }).catch(error => {
      console.log(error)
    });
  }

  render() {
    let title, selected, header;

    if(JSON.parse(localStorage.getItem("userInfo")).username !== this.state.userInfo.username) { // other users
      selected = "#";
      header = this.state.headerLoaded ? <ProfileHeader userInfo={this.state.userInfo} /> : <LoadingProfileHeader />;
      title = this.state.headerLoaded ? this.state.userInfo.firstname + " " + this.state.userInfo.lastname : "";
    } else {
      title = "My Profile";
      selected = "Profile";
      header = <ProfileHeader userInfo={this.state.userInfo} />
    }
    console.log("rendering");
    console.log(this.state.postsLoaded);

    return (
      <Page title={title} selected={selected}>
        <Feed>
          {header}
          { this.state.postsLoaded ? <PostList posts={this.state.posts} /> : <LoadingPost/> }
        </Feed>
      </Page>
    );
  }
}


export default ProfilePage;