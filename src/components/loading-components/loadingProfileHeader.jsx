import Skeleton from 'react-loading-skeleton'


export default function LoadingProfileHeader (props) {
  return (
    <div className="card column profile-header-card">
      {/*<img className="profile-cover-img" src={require("../resources/sample-profile-cover.png")}/>*/}
      {/*<img className="profile-photo" src={require("../resources/sample-profile-photo.png")}/>*/}
      <Skeleton className="sk-ph-cover" containerClassName="sk-ph-cover-c"/>
      <Skeleton className="sk-ph-profile-pic" containerClassName="sk-ph-profile-pic-c"/>

      <div className="row row-right gap-8">

        <div className="divider" />
          <Skeleton className="sk-ph-btn" containerClassName="sk-ph-btn-c"/>
          <Skeleton className="sk-ph-btn" containerClassName="sk-ph-btn-c"/>
        {/*{this.state.isMyProfile ? <button className="btn btn--secondary btn-profile-header">Edit Profile</button> :*/}
        {/*  <button className="btn btn--secondary">{this.state.following ? "Unfollow" : "Follow"}</button>}*/}
      </div>
      <div className="profile-info">
        <Skeleton className="sk-ph-name" containerClassName="sk-ph-name-c" />
        {/*<h1 className="profile-name">{userInfo.firstname + " " + userInfo.lastname}</h1>*/}

        <Skeleton className="sk-ph-username" containerClassName="sk-ph-username-c" />
        {/*<h3 className="profile-username">@{userInfo.username}</h3>*/}

        <Skeleton className="sk-ph-bio" containerClassName="sk-ph-bio-c" count={2.5} />
        {/*<p className="profile-biography">{userInfo.bio}</p>*/}
        <div className="row profile-follow-info">
          {/*<div className="row row-left gap-8"><strong>{userInfo.numberOfFollowings} </strong> Following</div>*/}
          <Skeleton className="sk-ph-followings" containerClassName="sk-ph-followings-c" />

          {/*<div className="row row-left gap-8"><strong>{userInfo.numberOfFollowers} </strong> Followers</div>*/}
          <Skeleton className="sk-ph-followers" containerClassName="sk-ph-followers-c" />
        </div>
      </div>
    </div>
  )
}