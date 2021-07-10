import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {
    const title = props.title;

    if (title.length > 50) {
        return <p className="item-title">{`${title.slice(0, 50)}...`}</p>
    }
    return <p className="item-title">{title}</p>
}


Title.defaultProps = {
    title: 'No title',
}
  
Title.propTypes = {
    title: PropTypes.string.isRequired
}