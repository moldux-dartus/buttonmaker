import './App.css';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      buttons:[]
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ buttons: [...this.state.buttons, Number(event.target.toAdd.value)]});
  }

  handleAdd = (event) => {
    event.preventDefault();
    this.setState({count: this.state.count + Number(event.target.value)});
  }

  render() {
    return (
      <div className="App">
                    
        <header>
          <h1 id="header">Custom Counter</h1>
        </header>
        <div>{ this.state.count }</div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="increment" id="toAdd"/>
          <button class="btn" type="submit">Generate Button</button>

        <div id="btn-container">
          {
            this.state.buttons.map((btn, idx) => {
              return <button class="btn" id={idx} type="button" onClick={this.handleAdd} value={btn}>Add {btn}</button>
            })
          }
        </div>

        </form>
      </div>
    );
  }
}
export default App;

/*
Make the button say Generate Button. 
When Generate Button is clicked with a 6 as the value in the number input, 
a new button should be generated that says Add 6 When Add 6 is clicked, it 
should increment the counter by 6.
Generate Button generates a new button, without removing the old one, each 
time it is clicked.
*/

// {
         //   this.state.buttons.map((btn, index) => {
         //     return (
         //       <div key={index}>
         //         <button for="toAdd" value={btn}>Add </button>
         //       </div>
         //     )
         //   })
         // }