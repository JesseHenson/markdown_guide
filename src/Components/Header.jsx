import React from 'react'
import {connect} from 'react-redux'
import { openRef } from '../Redux/actions';
import styled from 'styled-components'

const mapStateToProps = state => ({isRefOpen: state.header})

const mapDispatchToProps = dispatch => {
    return {openRef: () => dispatch(openRef)}
}

const StyledWrapper = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2C2C2C;

`;

const Header = ({openRef, isRefOpen}) => {
  return (
    <StyledWrapper>
      <h1 className="white mh2">Header</h1>
      <div onClick={openRef}>
        <i  className={`mh3 fas fa-ellipsis-${isRefOpen ? 'v' : 'h'}`}></i>
      </div>
    </StyledWrapper>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
