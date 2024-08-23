import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';
import Feed from "../feed";
import Page from "../pages/Page";
import "../../css/loading.css"


export default function LoadingPost (props) {



  return (
      <div className="card column gap-16">
        <div className="row row-left post-header">
          {/*<img className="profile-photo-s" src={require("../../resources/sample-profile-photo.png")}/>*/}
          <Skeleton circle={true} height={50} width={50} />
          <div className="column full-w" >
            {/*<h1 className="post-title">{postInfo.title}</h1>*/}
            <Skeleton className="sk-p-title"/>

            <div className="row row-left post-owner-info full-w">
              {/*<h2 className="post-owner-name">{postInfo.user.firstname + " " + postInfo.user.lastname}</h2>*/}
              {/*<h3 className="post-owner-username">@{postInfo.user.username}</h3>*/}
              <Skeleton containerClassName="sk-p-name-c" className="sk-p-name"/>
              <Skeleton containerClassName="sk-p-username-c" className="sk-p-username"/>
            </div>
          </div>
        </div>
        <p className="post-caption">
          <Skeleton count={4.3} className="sk-p-caption"/>
        </p>
        {/*<img className="post-image" src={require("../../resources/sample-post-image.png")}/>*/}

        <Skeleton className="sk-p-parent" containerClassName="sk-p-parent-c"/>
        {/*{postInfo.parentTitle === undefined || postInfo.parentTitle === null ? null : <a className="parent-post">{('from: "' + postInfo.parentTitle + '"')}</a>}*/}
        {/*<div className="row row-right full-w">*/}
        {/*  <Skeleton count={2}/>*/}
        {/*  <Skeleton count={2}/>*/}

          {/*<button className="btn btn--secondary">React({postInfo.numberOfReactions})</button>*/}

          {/*<button className="btn btn--secondary">Comment({postInfo.numberOfComments})</button>*/}
        {/*</div>*/}
      </div>
  )
}