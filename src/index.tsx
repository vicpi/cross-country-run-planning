import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import './index.scss';
import App from './App';

let store;
if (process.env.NODE_ENV === 'development') {
    store = createStore(rootReducer, composeWithDevTools());
} else {
    store = createStore(rootReducer);
}

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>, 
    document.getElementById('root')
);
