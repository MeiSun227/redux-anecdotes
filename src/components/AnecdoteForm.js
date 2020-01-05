import React from 'react'
import { createAction} from '../reducers/anecdoteReducer'

const AnecdoteForm = (props)=>{
  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    props.store.dispatch(createAction(content))
    event.target.newAnecdote.value = ''
  }
  return(
    <>
  <h2>create new</h2>
      <form onSubmit={createAnecdote}>
        <div>
          <input name="newAnecdote" />
        </div>
        <button type="submit">create</button>
      </form>
      </>
  )
}
export default AnecdoteForm