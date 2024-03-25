import React from 'react';
import './repo.less';
import { Link } from 'react-router-dom';

const Repo = ({ repo }) => {

    return (
        <div className='repo'>
            <div className="repo-header">
                <div className="repo-header-name">
                    <Link to={`/card/${repo.owner.login}/${repo.name}`}>
                        {repo.name}
                    </Link>
                </div>
                <div className="repo-header-stars">
                    {repo.stargazers_count}
                </div>
            </div>
            <div className="repo-last-commit">
                {repo.updated_at}
            </div>
            <a href={repo.html_url} className='repo-link'>Link to repository: {repo.html_url}</a>
        </div>
    );
}

export default Repo;

