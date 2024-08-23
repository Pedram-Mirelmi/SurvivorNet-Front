import {Link} from "react-router-dom";
import SideNavbar from "./sideNavbar";


function Aside (props) {

  if(props.side === "left"){
      return (
      <aside className="column page-aside">
        <SideNavbar selected={props.selected}/>
      {/* News*/}
      </aside>
    )
  }
  else {
    return (
      <aside className="column page-aside">

      </aside>
    )
  }
}



export default Aside;