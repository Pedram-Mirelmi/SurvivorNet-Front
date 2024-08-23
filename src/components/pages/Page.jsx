import {Component} from "react";
import PageHeader from "../pageHeader";
import {Fragment} from "react";
import "../../css/style.css"
import "../../css/page.css"
import Aside from "../aside";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  // getTitle() {
  //   switch (this.props.page) {
  //     case "Home":
  //
  //
  //   }
  // }

  render() {

    return (
      <Fragment>
        <PageHeader title={this.props.title}/>
        <div className="row page-layout">
          <Aside side="left" selected={this.props.selected}/>
          {this.props.children}
          <Aside side="right"/>
        </div>
      </Fragment>
    )
  }
}

export default Page;