import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import anecdotesService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import ConnectedAnecdoteForm from './components/AnecdoteForm'
import ConnectedAnedoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import ConnectedFilter from './components/Filter'
import anecdotes from './services/anecdotes'

const App = (props) => {
  useEffect(() => {
     anecdotesService.getAll().then(anecdotes => props.initializeAnecdotes(anecdotes)) }, [])
  return (
    <div>
      <ConnectedNotification />
      <ConnectedFilter />
      <ConnectedAnecdoteForm />
      <ConnectedAnedoteList />

    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)