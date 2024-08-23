import {Link} from "react-router-dom";
import baseApiUrl from "../globals";

export default function SingleSearchResult(props) {



  return (
    <div className="card row row-left gap-8">
      <img className="profile-photo-s" src={require("../resources/sample-profile-photo.png")}/>
      <div className="column gap-8">
        <Link to={"users/" + props.userInfo.username}>{props.userInfo.firstname + " " + props.userInfo.lastname}</Link>
        <Link to={"users/" + props.userInfo.username}>@{props.userInfo.username}</Link>
      </div>
    </div>
  )
}