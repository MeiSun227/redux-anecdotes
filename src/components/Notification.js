import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  console.log("HELLOOO")
  console.log(props)

  if (props.notification.visibility) {
    return (
      <div style={style}>
        {props.notification.message}
      </div>
    )
  } else {
    return (<></>)
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  };
};

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)