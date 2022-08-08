import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll' }}>
            {props.children}
            <div className='bt b--near-white mh5 mv5'></div>
            <h1 className='f2 mh5 mv5 white'>AI HELPERS</h1>
        </div>
    );
};

export default Scroll;