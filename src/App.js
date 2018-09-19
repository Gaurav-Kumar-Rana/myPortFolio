import React, { Component } from 'react';
import Header from './header';
import PropTypes from 'prop-types';

import BodyContailer from './bodycontainer';
import Footer from './footer';
import defaultProfile from './data_source/default';

//console.log(defaultProfile);

class App extends Component {
  // state={
  //   metaheaderdata:defaultProfile.header,
  //   metabodydata:defaultProfile.bodyConatiner,
  //   metafooterdata:defaultProfile.footer
  // }
  render() {
    const { settings } = this.props;
    return (
      <div className="App">
        {<Header metadata={defaultProfile} settings={settings}/>}
        {/* {<BodyContailer metadata={this.state.metabodydata}/> */}
        {<Footer metadata={defaultProfile} settings={settings}/>}
      </div>
    );
  }
}
App.propTypes = {
  settings: PropTypes.object.isRequired
};
export default App;
