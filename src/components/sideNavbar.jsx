import {Link} from "react-router-dom";

function onLogout(props) {
  localStorage.clear();
}

function SideNavbar (props) {
  return (
    <div className="card column gap-8">
      <img className="aside-logo" src={require("../resources/logo.png")}/>
      <div className={"row " + (props.selected === "Home" ? "navbar-option-selected" : "navbar-option")}>
        <img className="aside-icon" src={require("../resources/icons/home.svg").default}/>
        <Link to="/">Home</Link>
      </div>
      <div className={"row " + (props.selected === "Profile" ? "navbar-option-selected" : "navbar-option")}>
        <img className="aside-icon" src={require("../resources/icons/profile.svg").default}/>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={"row " + (props.selected === "Search" ? "navbar-option-selected" : "navbar-option")}>
        <img className="aside-icon" src={require("../resources/icons/search.svg").default}/>
        <Link to="/search">Search</Link>
      </div>

      <div className={"row " + (props.selected === "FAQ" ? "navbar-option-selected" : "navbar-option")}>
        <img className="aside-icon" src={require("../resources/icons/question.svg").default}/>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className={"row " + (props.selected === "Report" ? "navbar-option-selected" : "navbar-option")}>
        <img className="aside-icon" src={require("../resources/icons/report.svg").default}/>
        <Link to="/report">Report a Problem</Link>
      </div>
      <div className="row navbar-option navbar-logout-option">
        <img className="aside-icon" src={require("../resources/icons/logout.svg").default}/>
        <a href="/" onClick={() => {
          console.log(props)
          onLogout(props)
        }}>Logout!</a>
      </div>
    </div>
  )
}


export default SideNavbar;