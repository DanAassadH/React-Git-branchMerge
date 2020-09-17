import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import HelloStudent from './components/HelloStudent';
import './index.css';

ReactDOM.render(
  <React.StrictMode>

    <h1>React git Branch Merge Practice</h1>
   <HelloWorld/>
   <HelloWorld/>
   <HelloStudent name='danish'/>
   <HelloStudent name='eboka'/>

  </React.StrictMode>,
  document.getElementById('root')
);


