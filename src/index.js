import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import defaultWebSettings from '../asset/data_source/websettings';
import defaultWebSettings from '../src/data_source/websettings';

ReactDOM.render(<App settings={defaultWebSettings}/>, document.getElementById('root'));