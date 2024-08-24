import {Component} from "react";
import axios from "axios";
import PostList from "../postList";
import Page from "./Page";
import "../../css/style.css"
import "../../css/page.css"
import Feed from "../feed";
import PostComposition from "../PostComposition";
import baseApiUrl from "../../globals";
import LoadingPost from "../loading-components/loading-post";

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    posts: [],
    lastChunk: 0,
    postsLoaded: false
  }

  componentDidMount() {
    if(!this.credentialsExist()) {
      this.props.history.replace("/login")
    }

    let jwtToken = localStorage.getItem("jwt")
    console.log("mounted!" + jwtToken);
    const path = `${baseApiUrl}/posts/home`;
    axios.get(path,
      {params: {"chunk": this.state.lastChunk}, headers: {Authorization: jwtToken}} )
    .then((response) => {
        console.log(response);
        this.setState({
          posts: [...response.data, ...this.state.posts],
          lastChunk: this.state.lastChunk + 1,
          postsLoaded: true
        });
      })
    .catch(error => {
      console.log(error)
    });
  }

  onNewPost(postInfo) {
    this.setState({
      posts: [postInfo, ...this.state.posts],
      lastChunk: this.state.lastChunk,
      loaded: this.state.postsLoaded
    });
  }

  credentialsExist() {
    return (localStorage.getItem("jwt") !== null)
      && (localStorage.getItem("userInfo") !== null);
  }

  render() {
    if(!this.credentialsExist()) {
      this.props.history.replace("/login")
    }
    return (
      <Page title="Home" selected="Home">
        <Feed>
          <PostComposition onNewPost={this.onNewPost.bind(this)}/>
          {this.state.postsLoaded ? <PostList posts={this.state.posts} {...this.props}/> : <LoadingPost/> }
        {/*  TODO add "load more" button*/}
        </Feed>
      </Page>


    );
  }
}


export default HomePage;