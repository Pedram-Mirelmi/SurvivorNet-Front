import {Fragment} from "react";
import Comment from "./Comment";


export default function CommentsList (props) {
  return (
    <Fragment>
      {props.comments.map(c => <Comment commentInfo={c}/>)}
    </Fragment>
  );
}