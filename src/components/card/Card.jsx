import React, { useEffect, useState } from 'react';
import './card.less';
import { Link, useParams } from 'react-router-dom';
import { getContributors, getCurrentRepository } from '../../actions/repos';

const Card = (props) => {
    const { username, reponame } = useParams();
    const [repo, setRepo] = useState({ owner: {} });
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        getCurrentRepository(username, reponame, setRepo);
        getContributors(username, reponame, setContributors);
    }, []);

    return (
        <div>
            <div>
                <Link className='back-btn' to="/">
                    Back to Main
                </Link>
            </div>
            <h1>Repository Page</h1>
            <div className='card'>
                <img src={repo.owner.avatar_url} alt="owner" />
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            <div>
                <h4>Contributors:</h4>
                {contributors.map((c, i) => (
                    <div key={i}>
                        {i + 1}: {c.login}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
