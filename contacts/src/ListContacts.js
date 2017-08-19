import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props)
    }
    render() {
        return <ol className="contact-list">
            {this.props.contacts.map( contact => (
                <ContactListItem key={contact.id} contact={contact} removeContact={this.props.removeContact} />
            ))}
        </ol>      
    }
}

export default ListContacts