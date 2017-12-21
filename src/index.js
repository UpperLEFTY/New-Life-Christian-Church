import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './_bootstrap-compass.scss';
import './_alerts.scss';
import './_badges-scss';
import './_breadcrumbs.scss';
import App from './App';
import './_button-groups.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
