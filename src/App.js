import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './header';
import { apiCall } from './utility';
import BodyContailer from './bodycontainer';
import Footer from './footer';
import defaultWebSettings from '../src/data_source/websettings';

import {
  fetchUserProfileBegin,
  fetchUserProfileSucess, 
  fetchUserProfileFailure
} from './action';

const mapStateToProps = (state) =>{
  return{
    loadingdata:state.loadingdata,
    sucessdata:state.sucessdata,
    errordata:state.errordata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchUserProfileBegin : begin => dispatch(fetchUserProfileBegin(begin)), 
    fetchUserProfileSucess : sucess => dispatch(fetchUserProfileSucess(sucess)),
    fetchUserProfileFailure : error => dispatch(fetchUserProfileFailure(error))
  };
};

class App extends Component {

  componentDidMount() {
    let user = window.location.hash.split('/')[1];
    this.props.fetchUserProfileBegin();
    apiCall(`${user}`,this.props.fetchUserProfileSucess,this.props.fetchUserProfileFailure);
    //this.props.fetchUserProfileSucess(gauravProfile);
  }

  render() {
    const { sucessdata } = this.props;
    const settings = defaultWebSettings;
    return (
      <div className="App">
        {<Header metadata={sucessdata} settings={settings}/>}
        {<BodyContailer metadata={sucessdata} settings={settings}/>}
        {<Footer metadata={sucessdata} settings={settings}/>}
      </div>
    );
  }
}
// App.propTypes = {
//   settings: PropTypes.object.isRequired
// };
export default connect(mapStateToProps,mapDispatchToProps)(App);
