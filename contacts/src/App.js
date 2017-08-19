import React, { Component } from 'react'
import ListContacts from './ListContacts'
class App extends Component {
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      },
      {
        "id": "roger",
        "name": "Roger Albino",
        "email": "roger.albino.i@gmail.com",
        "avatarURL": "http://rogeralbino.com.br/images/roger-albino-desenvolvedor-front-end_og.jpg"
      }
    ]
  }

  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} removeContact={this.removeContact} />
      </div>
    )
  }
}

export default App
