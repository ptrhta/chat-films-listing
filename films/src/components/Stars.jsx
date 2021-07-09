import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';


export default function Stars(props) {
    const count = props.count;

    if (count < 0 && count > 5) {
        return null;
    }

    return(
        <ul className="card-body-stars u-clearfix">
            {
                new Array(count).fill(0).map((n, i) => <Star key={i} />)
            }
        </ul>
    )
}

Stars.defaultProps = {
    count: 0,
};
  
Stars.propTypes = {
    count: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
}