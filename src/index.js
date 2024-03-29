import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import store from './redux/store';
import SearchEngine from "./components/SearchEngine/SearchEngine";

ReactDOM.render(
    <Provider store={store}>
        <SearchEngine />
    </Provider>,
    document.getElementById('root')

);


