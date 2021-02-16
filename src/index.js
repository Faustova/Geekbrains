import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from './utils/store';
import Router from './components/Router'

ReactDOM.render(
    <Provider store={ initStore() }>
    <BrowserRouter>
       
            <Router />
     
    </BrowserRouter>
</Provider>,
   document.getElementById('app'),
);