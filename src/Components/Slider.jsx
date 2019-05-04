import React from 'react'
import { connect } from 'react-redux';

const mapStateToProps = state => ({sliderOpen: state.header})

const Slider = ({sliderOpen}) => {
  return (
    <div className={`slider ${sliderOpen ? 'left-0': 'left--30 o-0'} vw-30 absolute vh-100 bg-black`}>
        <p>something</p>
    </div>
  )
}

export default connect(mapStateToProps)(Slider)
