import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import VaribalesLists from './VariablesLists_Demo'
import JSX_Demo from './JSX_Demo'
import Components_Demo from './Component_Demo'
import Props_Demo from './Props_Demo'
import PropTypes_Demo from './PropTypes_Demo'
import States_Demo from './States_Demo'
import Event_Demo from './Event_Demo'
import Events_Demo from './Events_Demo'
import Refs_Demo from './Refs_Demo'
import Component_Lifecycle_Methods from './Component_Lifecycle_Methods'
import Controlled_Uncontrolled_inputs_Demo from './Controlled_Uncontrolled_inputs_Demo'
import Conditional_Rendering_Strategies from './Conditional_Rendering_Strategies'
import CRUD_APP_INDEX from './CRUD APP/App';
import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CRUD_APP_INDEX />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
