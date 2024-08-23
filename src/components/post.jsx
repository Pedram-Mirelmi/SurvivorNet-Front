import {Component} from "react";
import "../css/style.css"
import "../css/post.css"
import axios from "axios";


class Post extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loaded: this.props.loaded
  }

  render() {
    const postInfo = this.props.postInfo;
    return (
      <div className="card column gap-16">
        <div className="row row-left post-header">
          <img className="profile-photo-s" src={require("../resources/sample-profile-photo.png")}/>
          <div className="column">
            <h1 className="post-title">{postInfo.title}</h1>
            <div className="row row-left post-owner-info">
              <h2 className="post-owner-name">{postInfo.user.firstname + " " + postInfo.user.lastname}</h2>
              <h3 className="post-owner-username">@{postInfo.user.username}</h3>
            </div>
          </div>
        </div>
        <p className="post-caption">
          {postInfo.caption}
        </p>
        <img className="post-image" src={require("../resources/sample-post-image.png")}/>
          {postInfo.parentTitle === undefined || postInfo.parentTitle === null ? null : <a className="parent-post">{('from: "' + postInfo.parentTitle + '"')}</a>}
          <div className="row row-right">
            <button className="btn btn--secondary">React({postInfo.numberOfReactions})</button>
            <button className="btn btn--secondary">Comment({postInfo.numberOfComments})</button>
          </div>
      </div>
    )
  }
}

export default Post;