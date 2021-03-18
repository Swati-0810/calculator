import React from 'react';
import Keypad from './Components/Keypad';
import Screen from './Components/Screen';
import './App.css';

class App extends React.Component {
    state = {
        result : ""
    }
    buttonClicked = (buttonName) => {
        if(buttonName === '='){
            this.calculate();
        } else
            this.setState({
            result: this.state.result + buttonName
            });
    }
    calculate = () => {
        this.setState({
            result : eval(this.state.result)
        });
    };
    render() {
    return (
        <div className="App">
            <h2> Calculator </h2>
            <Screen result={this.state.result}/>
            <Keypad buttonClicked={this.buttonClicked} />
            
        </div>
    );
    }
}
export default App;