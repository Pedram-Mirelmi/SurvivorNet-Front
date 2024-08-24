

export default function Comment (props) {
  return (
    <div className="card row row-left">
      <img className="profile-photo-s" src={require("../resources/sample-profile-photo.png")}/>
      <div className="column">
        <div className="row">
          <h2 className="comment-owner-name">{`${props.user.firstname} ${props.user.lastname}`}</h2>
          <h3 className="comment-owner-username">{props.user.username}</h3>
        </div>
        <p>{props.commentInfo.text}</p>
      </div>
    </div>
  )
}