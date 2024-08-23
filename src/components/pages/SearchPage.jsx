import {Component} from "react";
import Page from "./Page";
import axios from "axios";
import baseApiUrl from "../../globals";
import SingleSearchResult from "../singleSearchResult";
import Feed from "../feed";


export default class SearchPage extends Component {
  constructor(props) {
    super();
  }

  state = {
    searchResults: [],
    lastChunk: 0
  }

  onQueryChange(e) {
    const myUsername = JSON.parse(localStorage.getItem("userInfo")).username;
    axios.get(baseApiUrl + "users/search",
      {headers: {Authorization: localStorage.getItem("jwt")},
      params:{query: e.target.value, chunk: 0}})
    .then(response => {
        this.setState({searchResults: [...response.data], lastChunk: 0})
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <Page>
        <Feed>
          <input type="text" onChange={this.onQueryChange.bind(this)}/>
          {this.state.searchResults.map(userInfo => <SingleSearchResult userInfo={userInfo}/>)}
        </Feed>
      </Page>
    )
  }

}