import React from 'react';
import PropTypes from 'prop-types';

export default function Response(props) {
    const message = props.message;

    return (
        <li>
            <div class="message-data">
                <span class="message-data-name">
                    <i class="fa fa-circle online"></i> 
                     {message.from.name}
                </span>
                <span class="message-data-time">
                    {message.time}
                </span>
            </div>
            <div class="message my-message">
                {message.text}
            </div>
        </li>
    )
}

Response.propTypes = {
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    message: PropTypes.shape({
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
}