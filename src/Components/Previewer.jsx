import React from 'react'
import {connect} from 'react-redux'
import {changeTextArea, nothingLeftTextArea} from '../Redux/actions'
import Markdown from 'markdown-to-jsx';
import styled from 'styled-components'


const mapStateToProps = state => {
    return {markdown: state.previewer}
}

const mapDispatchToProps = dispatch => {
    return { 
        TextAreaChange: (value) => {
            console.log(value);
            value !== "" ?
            dispatch(changeTextArea(value)) : 
            dispatch(nothingLeftTextArea())
        }
    }
}

const StyledTextArea = styled.textarea`
    background-color: #1E1E1E;
    width: 50%;
    height: 100%;
    color: white;
    resize: none;
    outline: none;
    border: none;
`;

const StyledReactMarkdown = styled.div`
    background-color: #252525;
    width: 50%;
    height: 100%;
    color: white;
    border: none;
    overflow-y: scroll;
    margin: 0 2rem 0 2rem;
`;

const StyledWrapper = styled.div`
    background-color: #252525;
    height: -moz-calc(100% - 44px);
    height: -webkit-calc(100% - 44px);
    height: calc(100% -44px);
    display: flex;
    flex-direction: row;
    align-items: center;

`;

const StyledHR = styled.hr`
    width: 80%;
    border: 1px solid #434343;
    border-radius: 4px;
`;

const styledPara = ({children, ...props}) => (
    <StyledReactMarkdown {...props}>{children}</StyledReactMarkdown>
)

const styledHeader = ({children, ...props}) => (
    <div>
        <h1 {...props}>{children}</h1>
        <StyledHR/>
    </div>
)

const styledSubHeader = ({children, ...props}) => (
    <div>
        <h2 {...props}>{children}</h2>
        <StyledHR/>
    </div>
)


const Previewer = ({markdown,TextAreaChange}) => {
    const RenderedMarkdown = 
    <Markdown
        children={markdown}
        options={{
            overrides: {
                component: {
                    component: styledPara,
                },
                h1: {
                    component: styledHeader
                },
                h2: {
                    component: styledSubHeader
                }
            }
        }}
    />

    
    return (
            <StyledWrapper>
                <StyledTextArea
                    placeholder={markdown}
                    onChange={(event)=> TextAreaChange(event.target.value)}
                    name=""
                    id="editor"
                >
                </StyledTextArea>
                <StyledReactMarkdown>
                    {RenderedMarkdown}
                </StyledReactMarkdown>
            </StyledWrapper>
    )
}



export default connect(mapStateToProps, mapDispatchToProps)(Previewer)
