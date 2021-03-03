import React from 'react';
import PropTypes from 'prop-types';

const Book = ({title = '', author = ''})=>{
    return(
        <div className="card">
            <h3>{ title }</h3>
            <span>{ author }</span>
        </div>
    )
}

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}

export default Book;