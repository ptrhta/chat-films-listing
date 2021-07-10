import React from 'react';
import PropTypes from 'prop-types';

export default function Message(props) {
    const message = props.message;

    return (
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">
                {message.time} 
            </span>
            <span className="message-data-name">
                {message.from.name}
            </span>
            <i className="fa fa-circle me"></i>
          </div>
          <div className="message other-message float-right">
            {message.text}
          </div>
        </li>
    )
}

Message.propTypes = {
    from: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    message: PropTypes.shape({
      time: PropTypes.string.isRequired,
      text: PropTypes.string,
    })
}