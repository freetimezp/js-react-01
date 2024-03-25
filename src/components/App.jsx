import React from 'react';
import './app.less';
import { Routes, Route } from 'react-router-dom';

import Main from './main/Main.jsx';
import Card from '../../src/components/card/Card.jsx';

const App = () => {
    return (
        <div className="container">
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path={`/card/:name`} element={<Card />} />
            </Routes>
        </div>
    );
}

export default App;
