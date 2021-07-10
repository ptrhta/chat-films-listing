import React from 'react';
import PropTypes from 'prop-types';

export default function Price(props) {
    const currencyCode = props.currencyCode;
    const price = props.price;

    if (currencyCode === 'USD') {
        return <p className="item-price">${price}</p>
    }
    if (currencyCode === 'EUR') {
        return <p className="item-price">€{price}</p>
    }
    return <p className="item-price">{`${price} ${currencyCode}`}</p>
}


Price.defaultProps = {
    price: 'No price',
    currencyCode: ''
}
  
Price.propTypes = {
    price: PropTypes.string.isRequired,
    currencyCode: PropTypes.string.isRequired
}