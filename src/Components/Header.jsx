import React from 'react'
import {connect} from 'react-redux'
import { openRef } from '../Redux/actions';

const mapStateToProps = state => ({isRefOpen: state.header})

const mapDispatchToProps = dispatch => {
    return {openRef: () => dispatch(openRef)}
}


const Header = ({openRef, isRefOpen}) => {
  return (
    <div className="absolute flex flex-row justify-between items-center bg-gradient-dark-primary w-100">
      <h1 className="white mh2">Header</h1>
      <div onClick={openRef}>
        <i  className={`mh3 fas fa-ellipsis-${isRefOpen ? 'v' : 'h'}`}></i>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
