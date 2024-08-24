import {Component} from "react";


export default class SelectableTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tab-card row">
        {this.props.tabs.map(
          (tabName) => <div
            className={"p-tab " + (this.props.selected === tabName ? "p-tab-selected" : "")}
            onClick={() => this.props.onTabClicked(tabName)}>{tabName}</div>
        )}

      </div>
    )
  }
}