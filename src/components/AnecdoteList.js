import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { notificationAction, removeNotificationAction } from '../reducers/notificationReducer'

const AnecdoteList = (props)=>{
  const anecdotes = props.store.getState().anecdotes
  const vote = (id) => {
    props.store.dispatch(voteAction(id))
    props.store.dispatch(notificationAction(id, anecdotes))
    setTimeout(() => {props.store.dispatch(removeNotificationAction())},5000)
  }
  return(
    <>
     <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
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
export default AnecdoteList