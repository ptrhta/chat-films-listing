import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

export default function MessageHistory(props) {
    const list = props.list;

    if (list.length) {
        return (
            <ul>
                {
                    list.map(message => {
                        if (message.type === 'message') {
                        return <Message key={message.id} message={message} />
                        }
                    
                        if (message.type === 'response') {
                        return <Response key={message.id} message={message} />
                        }
                    
                        if (message.type === 'typing') {
                        return <Typing key={message.id} message={message} />
                        }

                        return null
                    })
                }
            </ul>
        )
    }

    return null
}


MessageHistory.defaultProps = {
    list: []
}
  
MessageHistory.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        from: PropTypes.object.isRequired,
        type: PropTypes.oneOf(['response', 'message', 'typing']).isRequired,
        time: PropTypes.string.isRequired,
        text: PropTypes.string
      })
    )
}