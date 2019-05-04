import React from 'react'
import {connect} from 'react-redux'
import {changeTextArea, nothingLeftTextArea} from '../Redux/actions'
import ReactMarkdown from 'react-markdown';


const mapStateToProps = state => {
    return {markdown: state.previewer}
}

const mapDispatchToProps = dispatch => {
    return { 
        TextAreaChange: (value) => {
            value !== "" ?
            dispatch(changeTextArea(value)) : 
            dispatch(nothingLeftTextArea())
        }
    }
}

const Previewer = ({markdown,TextAreaChange}) => {
    
  return (
    <div className="bg-primary flex flex-row items-center vh-100">
        <textarea
            className="pa3 br2 bg-primary-dark white mh2 h-75 w-50 bn resize-none no-outline"
            placeholder={markdown}
            onChange={(event)=> TextAreaChange(event.target.value)}
            name=""
            id="editor">
        </textarea>
        <ReactMarkdown className="previewer br2 h-75 pa3 bg-primary-dark white mh2 w-50 overflow-auto" linkTarget="blank" source={markdown}/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Previewer)
