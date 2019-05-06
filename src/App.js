import React, {Fragment} from 'react';
import './App.css';
import Previewer from './Components/Previewer';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Footer from './Components/Footer';



const App = ({markdown,TextAreaChange}) => {

    return (
        <div className="mb-10 min-h-100">
            <Header/>
            <Slider/>
            <Previewer/>
            <Footer/>
        </div>
    )
}

export default App