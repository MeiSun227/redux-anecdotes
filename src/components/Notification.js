import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  
  }
  const kissa = {
    name: 'meow',
    food: 'kala'
  }
  return (
    <div style={style}>
      {props.store.getState().notifications}
    </div>
  )
}

export default Notification