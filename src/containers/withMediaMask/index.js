import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchContract } from '../../actions/contractActions'

export default WrappedComponent => {
  class WithMediaMask extends Component {
    constructor(props) {
      super(props)
      this.props.fetchContract()
    }

    render() {
      if (this.props.hasErrored) {
        return <p>Sorry! There was an error loading the items</p>
      }

      if (this.props.isLoading) {
        return <p>Loading…</p>
      }

      return <WrappedComponent {...this.props} />
    }
  }
  const mapStateToProps = state => {
    return {
      hasErrored: state.hasErrored,
      isLoading: state.isLoading
    }
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchContract: () => dispatch(fetchContract()),
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(WithMediaMask)
}
