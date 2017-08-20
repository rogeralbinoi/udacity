import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    screen: 'list', // list, create
    contacts: []
  }

  onNavigate = () => {
    window.location.hash && this.setState({
      screen: window.location.hash.replace('#','')
    })
  }

  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))

    ContactsAPI.remove(contact)
  }

  componentWillMount() {
    this.onNavigate()
  }
  
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({contacts})
    })
  }

  render() {
    return (
      <div>
        { this.state.screen === 'create' && (
          <CreateContact />
        )}

        { this.state.screen === 'list' && (
          <ListContacts contacts={this.state.contacts} 
                        removeContact={this.removeContact}
                        onNavigate={this.onNavigate} />
        )}

      </div>
    )
  }
}

export default App
