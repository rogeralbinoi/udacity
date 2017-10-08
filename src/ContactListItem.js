import React from 'react'
import PropTypes from 'prop-types'

const ContactListItem = props => (
    <li className="contact-list-item">
        <div className="contact-avatar" style={{
            backgroundImage: `url(${props.contact.avatarURL})`
        }}></div>
        <div className="contact-details">
            <p>{props.contact.name}</p>
            <p>{props.contact.email}</p>
        </div>
        <button className="contact-remove" onClick={() => props.removeContact(props.contact)}>Remove</button>
    </li>
)

ContactListItem.propTypes = {
    contact: PropTypes.object.isRequired,
    removeContact: PropTypes.func.isRequired
}

export default ContactListItem