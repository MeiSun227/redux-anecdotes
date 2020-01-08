import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { notificationAction, removeNotificationAction } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
  const anecdotes = props.anecdotes
  const filter = props.filter
  const filteredAnecdotes = anecdotes.filter((anecdote) => anecdote.content.includes(filter))
  const vote = (id) => {
    props.voteAction(id)
    props.notificationAction(id, anecdotes)
    setTimeout(() => { props.removeNotificationAction() }, 5000)
  }
  return (
    <>
      <h2>Anecdotes</h2>
      {filteredAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}
const mapDispatchToProps = { voteAction, notificationAction, removeNotificationAction }

const ConnectedAnedoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnedoteList 