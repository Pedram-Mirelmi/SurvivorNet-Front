import Page from "../pages/Page";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import { BarLoader } from 'react-spinners';

import 'react-loading-skeleton/dist/skeleton.css';
import LoadingPost from "../loading-components/loading-post";
import LoadingProfileHeader from "../loading-components/loadingProfileHeader";
import Feed from "../feed";
import {Component} from "react";


export default class TestPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    a: 1,
    b: 1,
    c: 1
  }

  incrementA () {
    this.setState({a: this.state.a + 1})
  }

  incrementB () {
    this.setState({b: this.state.b + 1})
  }

  incrementC () {
    this.setState({c: this.state.c + 1})
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementA.bind(this)}>Increment A which is {this.state.a} now</button> <br/>
        <button onClick={this.incrementB.bind(this)}>Increment B which is {this.state.b} now</button> <br/>
        <button onClick={this.incrementC.bind(this)}>Increment C which is {this.state.c} now</button> <br/>

      </div>
    );
  }
}