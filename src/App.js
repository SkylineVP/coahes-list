import React, {Component} from 'react';
import './App.css';
import Menu               from "./components/Menu"
import CoachesList        from "./components/CoachesList";

class App extends Component {
    render() {
        return (
            <div className='main'>
                <Menu/>
                <CoachesList/>
            </div>

        )
    }
}

export default App;
