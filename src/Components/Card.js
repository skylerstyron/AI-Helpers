import React from 'react';

const Card = ({ name, email, id, catchPhrase }) => {
    return (
        <div className='tc bg-light-blue dib pa3 br3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robot' className='b--solid b--black-30' />
            <div>
                <h2>{name}</h2>
                <p>{catchPhrase}</p>
            </div>
        </div>
    );
}

export default Card;