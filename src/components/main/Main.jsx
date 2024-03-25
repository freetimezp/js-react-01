import React, { useEffect, useState } from 'react';
import './main.less';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../../actions/repos';
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);

    const [searchValue, setSearchValue] = useState('');

    const searchHandler = () => {
        searchValue !== '' ? dispatch(getRepositories(searchValue)) : dispatch(getRepositories());
    }

    useEffect(() => {
        dispatch(getRepositories());
    }, []);

    return (
        <div>
            <div className='search'>
                <input
                    type="text"
                    placeholder='Search repository by name'
                    className='search-input'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className='search-btn' onClick={() => searchHandler()}>
                    Search
                </button>
            </div>
            {isFetching === false ? (
                repos && repos.length > 0 && repos.map((repo, i) => (
                    <Repo key={i} repo={repo} />
                ))
            ) : (
                <div className='fetching'></div>
            )}
        </div>
    );
}

export default Main;
