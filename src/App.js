import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from  './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {
  return (
    <div>
     <AnecdoteList store={props.store} ></AnecdoteList>
      <AnecdoteForm store={props.store}></AnecdoteForm>
      <Notification store ={props.store}></Notification>
    </div>
  )
}

export default App