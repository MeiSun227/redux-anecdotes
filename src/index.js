import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdotesService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  filter: filterReducer

})
const store = createStore(reducer)
anecdotesService
  .getAll()
  .then(anecdotes => anecdotes.forEach(anecdote => {
    store.dispatch({ type: 'NEW_ANECDOTE', data: anecdote })
  }))

const render = () => {
  ReactDOM.render(
    <Provider store={store}>    <App />  </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)