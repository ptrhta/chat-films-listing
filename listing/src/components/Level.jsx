import React from 'react';
import PropTypes from 'prop-types';

export default function Level(props) {
    const quantity = props.quantity;
    let level = 'high'

    if (quantity <= 10) {
        level = 'low'
    }
    if (quantity < 20) {
        level = 'medium'
    }
    return <p className={`item-quantity level-${level}`}>{quantity} left</p>
}


Level.defaultProps = {
    quantity: '0'
}
  
Level.propTypes = {
    quantity: PropTypes.number.isRequired
}