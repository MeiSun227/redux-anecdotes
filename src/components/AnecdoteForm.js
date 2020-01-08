import React from 'react'
import { connect } from 'react-redux'
import { createAction} from '../reducers/anecdoteReducer'

const AnecdoteForm = (props)=>{
  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.newAnecdote.value
    props.createAction(content)
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

const mapStateToProps = (state) => {
  return {state}
}

const mapDispatchToProps = { createAction }

const ConnectedAnecdoteForm = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm 