import React from 'react'

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

const ListContacts = props => (
    <ol className="contact-list">
        {props.contacts.map( contact => (
            <ContactListItem key={contact.id} contact={contact} removeContact={props.removeContact} />
        ))}
    </ol>
)

export default ListContacts