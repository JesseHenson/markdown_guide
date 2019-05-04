import React, {Fragment} from 'react';
import './App.css';
import Previewer from './Components/Previewer';
import Header from './Components/Header';
import Slider from './Components/Slider';



const App = ({markdown,TextAreaChange}) => {

    return (
        <Fragment>
            <Header/>
            <Slider/>
            <Previewer/>
        </Fragment>
    )
}

export default App