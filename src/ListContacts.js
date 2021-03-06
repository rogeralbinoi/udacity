import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ContactListItem from './ContactListItem'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
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
        this.setState({
            query: query.charAt(query.length-1) === ' ' ? query.trim() + ' ' : query.trim()
        })
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    render() {
        const {contacts, removeContact} = this.props
        const {query} = this.state
        let showingContacts

        if(query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showingContacts = contacts.filter(contact => {
                return match.test(contact.name) || match.test(contact.email)
            })
        }else {
            showingContacts = contacts
        }

        showingContacts.sort(sortBy('name'))

        return (
            <div className="list-contacts">
                <div className="list-contacts-top">
                    <input type="text" 
                           className="search-contacts"
                           placeholder="Search contacts"
                           value={query}
                           onChange={e => this.updateQuery(e.target.value)} />
                    <Link to="/create" 
                        className="add-contact"/>
                </div>

                { showingContacts.length !== contacts.length
                    && (
                        <div className="showing-contacts">
                            <span>Now showing {showingContacts.length} of {contacts.length} total </span>
                            <button onClick={()=> this.clearQuery()}>Show all</button>
                        </div>
                    )
                }
                
                <ol className="contact-list">
                    {showingContacts.map( contact => (
                        <ContactListItem key={contact.id} contact={contact} removeContact={removeContact} />
                    ))}
                </ol>
            </div>
        )      
    }
}

export default ListContacts