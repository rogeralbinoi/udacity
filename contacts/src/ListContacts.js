import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = query => {
        this.setState({ query: query.trim() })
    }

    render() {
        let showingContacts
        
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingContacts = this.props.contacts.filter(contact => {
                return match.test(contact.name) || match.test(contact.email)
            })
        }else {
            showingContacts = this.props.contacts
        }

        showingContacts.sort(sortBy('name'))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input type="text" 
                           className="search-contacts"
                           placeholder="Search contacts"
                           value={this.state.query}
                           onChange={e => this.updateQuery(e.target.value)} />
                </div>
                <ol className="contact-list">
                    {showingContacts.map( contact => (
                        <ContactListItem key={contact.id} contact={contact} removeContact={this.props.removeContact} />
                    ))}
                </ol>
            </div>
        )      
    }
}

export default ListContacts