import Page from "../pages/Page";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import { BarLoader } from 'react-spinners';

import 'react-loading-skeleton/dist/skeleton.css';
import LoadingPost from "../loading-components/loading-post";
import LoadingProfileHeader from "../loading-components/loadingProfileHeader";
import Feed from "../feed";
import {Component} from "react";
import SingleSearchResult from "../singleSearchResult";


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
        <SingleSearchResult userInfo = {{
          username: "username",
          firstname: "fname",
          lastname: "lname",
        }}/>

      </div>
    );
  }
}