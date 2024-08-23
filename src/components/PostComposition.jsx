import axios from "axios";
import baseApiUrl from "../globals";





function PostComposition (props) {
  function submitPost (e) {
    e.preventDefault();
    const data = ["title", "caption"].reduce((acc, field) => {
      acc[field] = e.target.elements[field].value;
      e.target.elements[field].value = null;
      return acc;
    }, {});
    axios.post(baseApiUrl + "posts",
        data,
        {headers: {Authorization: localStorage.getItem("jwt")}})
    .then(response => {
      console.log(response);
      props.onNewPost(response.data.postInfo)
    })
    .catch(e => {
      console.log(e)
    })
  }

  return (
    <form onSubmit={submitPost} className="card column gap-16 new-post">
      <div className="row row-left gap-16">
        <img className="profile-photo-s" src={require("../resources/sample-profile-photo.png")}/>
        <input id="title" name="title" type="text" placeholder="Post Title" required/>
      </div>
      <textarea id="caption" name="caption"
                placeholder="What's been happening?"
                required/>
      <div className="row row-space-between">
        <button className="btn-icon">
          <img className="aside-icon" src={require("../resources/icons/add-image.svg").default}/>
        </button>
        <button type="submit" className="btn btn--primary">Post</button>
      </div>
    </form>
  );
}


export default PostComposition;