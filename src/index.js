import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignUpProvider from './components/form/signup/context';
import AppProvider from './context'


ReactDOM.render(<AppProvider><SignUpProvider><App /></SignUpProvider></AppProvider>, document.getElementById('root'));
