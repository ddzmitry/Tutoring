import React, {Component} from "react";
import imgfunc from "./test.js";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: '',
      value: ''};

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  getJoke(){
    console.log('hello')
    async function dataJoke(x) {
      const a = await fetch("http://api.icndb.com/jokes/random")
      return a;
    }
    
    dataJoke()
    .then(data => data.json())
    .then(joke => this.setState({joke: joke.value.joke}))

   }
  // http://api.icndb.com/jokes/random


  handleChange(event) {
    this.setState({value: event.target.value});
  }
  removeItem(data){

    let ToPop = JSON.parse(localStorage.getItem('list'))
    ToPop.data = ToPop.data.filter(vals => vals != data )
    ToPop = JSON.stringify(ToPop)
    localStorage.setItem('list',ToPop)
    this.forceUpdate()
  }
  try(data){
    return (
      <li key ={data} > {data}  <span onClick={()=>this.removeItem(data)}>✖</span></li>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    if(localStorage.getItem('list')){
      let ToPush = JSON.parse(localStorage.getItem('list'))
      ToPush.data.push(this.state.value)
      ToPush = JSON.stringify(ToPush)
      localStorage.setItem('list',ToPush)
    } else {
      let list = { data: [this.state.value] }
      list = JSON.stringify(list)
      localStorage.setItem('list',list)
    }
    this.forceUpdate()
  }

  render() {
    return (
      <div>
      <form onSubmit={(e)=> this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit"  value="Submit" />
      </form>
          {localStorage.getItem('list')?  JSON.parse(localStorage.getItem('list')).data.map(thing => this.try(thing) ):''}

          <input  onClick={()=>this.getJoke()} type="submit" value="RandomQuote"/>
            {this.state.joke? <pre>{this.state.joke}</pre>: ''}
      </div>
    );
  }
}

export default Calculator;
