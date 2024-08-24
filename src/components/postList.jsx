import {Component, Fragment} from "react";
import Post from "./post";


class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const posts = this.props.posts;
    return (
      <Fragment>
        {posts.map(post => <Post postInfo={post} key={post.postId} {...this.props} />)}
      </Fragment>
    )
  }
}

export default PostList;