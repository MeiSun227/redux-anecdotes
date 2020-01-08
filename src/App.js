import React from 'react';
import AnecdoteForm from './components/AnecdoteForm'
import ConnectedAnedoteList  from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'

const App = (props) => {
  return (
    <div>
      <Notification store={props.store}></Notification>
      <Filter store={props.store}></Filter>
      <AnecdoteForm store={props.store}></AnecdoteForm>
      <ConnectedAnedoteList store={props.store} ></ConnectedAnedoteList >

    </div>
  )
}

export default App