import {Component} from "react";
import Post from "../post";
import LoadingPost from "../loading-components/loading-post";
import Page from "./Page";
import SelectableTab from "../SelectableTab";
import CommentsList from "../CommentsList";
import axios from "axios";
import baseApiUrl from "../../globals";
import Feed from "../feed";


export default class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state.postInfo.postId = props.match.params.postId;
  }

  state = {
    postLoaded: false,
    postInfo: {},

    selectedCommentSection: "Comments",

    commentsLoaded: false,
    comments: [],
    commentsLastChunk: 0,

    suggestionsLoaded: false,
    suggestions: [],
    suggestionsLastChunk: 0
  }

  componentDidMount() {
    if(!this.state.postLoaded) {
      this.getPostInfo();
    }
    this.getPostComments();
  }

  getPostInfo() {
    const postId = this.state.postInfo.postId;
    console.log("getting postInfo");
    axios.get(`${baseApiUrl}/posts/${postId}`,
      {headers: {Authorization: localStorage.getItem("jwt")}})
    .then(response => {
      console.log("got postInfo: ")
      this.setState({postInfo: response.data, postLoaded: true});
    })
  }

  getPostComments() {
    const postId = this.state.postInfo.postId;
    console.log("getting post comments");
    axios.get(`${baseApiUrl}/posts/${postId}/comments`,
      {headers: {Authorization: localStorage.getItem("jwt")}})
    .then(response => {
        this.setState({
          commentsLoaded: true,
          comments: [...response.data],
          commentsLastChunk: this.state.commentsLastChunk + 1
        })
    })
    .catch(error => {
      console.log(error);
    })
  }

  getPostSuggestions() {
    const postId = this.state.postInfo.postId;
    console.log("getting post suggestions");
    const path = `${baseApiUrl}/posts/${postId}/suggestions`;
    axios.get(path,
      {headers: {Authorization: localStorage.getItem("jwt")}})
      .then(response => {
        this.setState({
          suggestionsLoaded: true,
          suggestions: [...response.data],
          suggestionsLastChunk: this.state.suggestionsLastChunk + 1
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  onTabClicked(tabName) {
    this.setState({selectedCommentSection: tabName});
  }


  render() {
    return (
      <Page selected="#" title={this.state.postInfo.title} titleLoading={!this.state.postLoaded} >
        <Feed>
          {this.state.postLoaded ? <Post postInfo={this.state.postInfo} /> : <LoadingPost />}
          <SelectableTab selected={this.state.selectedCommentSection}
                         tabs={["Comments", "Suggestions"]}
                         onTabClicked={this.onTabClicked.bind(this)} />
          <CommentsList comments={this.state.selectedCommentSection === "Comments" ? this.state.comments : this.state.suggestions} />
        </Feed>
      </Page>
    );
  }
}