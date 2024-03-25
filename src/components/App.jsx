import React from 'react';
import './app.less';
import { useDispatch, useSelector } from 'react-redux';
import { setCount } from '../reducers/reposReducer';

const App = () => {
    const dispath = useDispatch();

    const count = useSelector(state => state.repos.count);

    const onCountClick = () => {
        dispath(setCount(5));
    }

    return (
        <div className='app'>
            <button onClick={() => onCountClick()}>
                count
            </button>

            <div>
                {count}
            </div>
        </div>
    );
}

export default App;
