import React, { useEffect, useState } from 'react';
import './main.less';
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories } from '../../actions/repos';
import Repo from './repo/Repo';
import { setCurrentPage } from '../../reducers/reposReducer';

const Main = () => {
    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const perPage = useSelector(state => state.repos.perPage);
    const totalCount = useSelector(state => state.repos.totalCount);

    const [searchValue, setSearchValue] = useState('');

    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = [];
    createPages(pages, pagesCount, currentPage);

    useEffect(() => {
        dispatch(getRepositories(searchValue, currentPage, perPage));
    }, [currentPage]);

    const searchHandler = () => {
        dispatch(currentPage(1));
        searchValue = dispatch(getRepositories(searchValue, currentPage, perPage));
    }

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

            <div className='pages'>
                {pages.map((page, index) => (
                    <span
                        key={index}
                        className={`${currentPage == page ? 'current-page' : ''} page`}
                        onClick={() => dispatch(setCurrentPage(page))}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Main;

export const createPages = (pages, pagesCount, currentPage) => {
    if (pagesCount > 10) {
        if (currentPage > 5) {
            for (let i = currentPage - 4; i <= currentPage + 5; i++) {
                pages.push(i);
                if (i == pagesCount) break;
            }
        } else {
            for (let i = 1; i <= 10; i++) {
                pages.push(i);
                if (i == pagesCount) break;
            }
        }
    } else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    }
}
