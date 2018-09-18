import React, { Component } from 'react';
import Header from './header';
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
    return (
      <div className="App">
        {<Header metadata={defaultProfile}/>}
        {/* {<BodyContailer metadata={this.state.metabodydata}/>}
        {<Footer metadata={this.state.metafooterdata}/>} */}
      </div>
    );
  }
}

export default App;
