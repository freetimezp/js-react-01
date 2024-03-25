import React from 'react';
import './card.less';
import { Link, useParams } from 'react-router-dom';

const Card = (props) => {
    const { name } = useParams();

    return (
        <div>
            <h1>Card Page of your repo: <span>{name}</span></h1>
            <div>
                <Link className='back-btn' to="/">
                    Back to Main
                </Link>
            </div>
        </div>
    );
}

export default Card;
