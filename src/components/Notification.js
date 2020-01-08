import React from 'react'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  
  }
  if (props.store.getState().notifications.visibility) {
    return (
      <div style={style}>
        {props.store.getState().notifications.message}
      </div>
    )
  } else {
    return (<></>)
  }
}

export default Notification