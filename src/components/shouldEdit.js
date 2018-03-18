import React from 'react'
import { connect } from 'react-redux'

const RenderEdit = ({ owner, currentUserAddress }) => {
  if( owner && currentUserAddress && owner === currentUserAddress ) {
    return <button>Edit</button>
  }
  return <div/>;
}

const mapStateToProps = ({currentUserAddress}) => ({ currentUserAddress })

export default connect(mapStateToProps)(RenderEdit)
