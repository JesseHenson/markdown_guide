import React, {Fragment} from 'react';
import './App.css';
import Previewer from './Components/Previewer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import styled from 'styled-components'

const StyledApp = styled.div`
    height: 100vh;
`;

const App = ({markdown,TextAreaChange}) => {

    return (
        <StyledApp>
            <Header/>
            <Slider/>
            <Previewer/>
        </StyledApp>
    )
}

export default App