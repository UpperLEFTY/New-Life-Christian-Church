import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './_bootstrap-compass.scss';
import './alerts.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
