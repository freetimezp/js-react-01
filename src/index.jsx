import './index.less';

import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from '../src/components/App';

import { store } from './reducers';


createRoot(document.getElementById("root"))
    .render(
        <Provider store={store}>
            <App />
        </Provider>
    );

