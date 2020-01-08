import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  console.log(props)

  if (props.visibility) {
    return (
      <div style={style}>
        {props.message}
      </div>
    )
  } else {
    return (<></>)
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
    visibility: state.visibility
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification