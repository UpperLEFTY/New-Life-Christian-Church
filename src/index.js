import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './mixins.scss';
import './normalize.scss';
import './variables.scss';
import './style.scss';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
