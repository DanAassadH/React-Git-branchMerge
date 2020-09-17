import React from 'react';
import ReactDOM from 'react-dom';
import HelloStudent from './components/HelloStudent';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h2>Git Branch Test</h2>
   <HelloStudent name='danish'/>
   <HelloStudent name='eboka'/>
  </React.StrictMode>,
  document.getElementById('root')
);


