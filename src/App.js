import React,{Component} from 'react'

class App extends Component{
  constructor(){
    super();
    this.state = {
      numbers: ['1','2','3','4','5','6'],
      randNumb: ""
    }
    this.randNumb = this.randNumb.bind(this)
  }
  randNumb(e){
    this.setState({
      randNumb: this.state.numbers[Math.floor(Math.random() * this.state.numbers.length)]
    });
  }
  render() {
    return (
      <div style={{textAlign:'center'}} className="App">
        <h1 style={{textAlign:'center'}}>Roll The Dice</h1>
        <p style={{fontSize:'20px'}}>{this.state.randNumb}</p>
        <button onClick={this.randNumb}>Click to Roll</button>
      </div>
    );
  }
}

export default App;
