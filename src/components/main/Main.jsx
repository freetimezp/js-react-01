import React, { useEffect } from 'react';
import './main.less';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../../actions/repos';
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items);

    useEffect(() => {
        dispatch(getRepositories());
    }, []);

    return (
        <div>
            {repos && repos.length > 0 && repos.map((repo, i) => (
                <Repo key={i} repo={repo} />
            ))}
        </div>
    );
}

export default Main;
