import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { notificationAction, removeNotificationAction } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {

  const vote = (anecdote) => {
    props.voteAction(anecdote)
    props.setNotification(`you voted '${anecdote.content}'`, 5000)
  }
  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotesToShow(props).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

const anecdotesToShow =(props)=>{
  return props.anecdotes.filter((anecdote) => anecdote.content.includes(props.filter))
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