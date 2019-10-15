import React, { Component } from 'react'
import UsernameForm from "./components/UsernameForm"
import ChatScreen from "./ChatScreen"


class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUsername: "",
      currentScreen: "WhatIsYourUserName"
    }
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }

  onUsernameSubmitted(username) {
    fetch("http://localhost3001/users", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({ username }),
    }).then( () => { 
      this.setState({ 
        currentUsername: username, 
        currentScreen: "ChatScreen"
      })
    })
    .catch(error => console.error("error", error))
    }
  

  render() {
    if (this.state.currentScreen === "WhatIsYourUserName") {
      return <UsernameForm onSubmit={this.onUsernameSubmitted} />
    }
    if (this.state.currentScreen === "ChatScreen") {
      return <ChatScreen currentUsername={this.state.currentUsername} />

    }
  }
}

export default App;
