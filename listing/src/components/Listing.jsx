import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Price from './Price';
import Level from './Level';

export default function Listing(props) {
    const items = props.items;

    return (
        <div className="item-list">
            {
                items.map(item => {
                    if (item.state === "active") return(
                        <div key={item.listing_id} className="item">
                            <div className="item-image">
                                <a href={item.url}>
                                    <img 
                                        alt={item.title} 
                                        src={item.MainImage.url_570xN} 
                                    />
                                </a>
                            </div>
                            <div className="item-details">
                                <Title title={item.title} />
                                <Price 
                                    currencyCode={item.currency_code} 
                                    price={item.price} 
                                />
                                <Level quantity={item.quantity} />
                            </div>
                        </div>
                    )
                    return null
                })
            }
        </div>
    )
}

Listing.defaultProps = {
    items: [],
}
  
  Listing.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        listing_id: PropTypes.number.isRequired,
        url: PropTypes.string.isRequired,
        MainImage: PropTypes.shape({
          url_570xN: PropTypes.string.isRequired,
        }),
        title: PropTypes.string.isRequired,
        currency_code: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
      })
    )
}