import React from 'react';
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnedoteList  from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'

const App = (props) => {
  return (
    <div>
      <ConnectedNotification/>
      <ConnectedFilter/>
      <ConnectedAnecdoteForm/>
      <ConnectedAnedoteList/>

    </div>
  )
}

export default App