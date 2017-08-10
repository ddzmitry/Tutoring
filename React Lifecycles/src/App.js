import React, {Component} from 'react'
import loggify from './loggify'
import { BigList } from './lists'
import {
  Parent,
  Column,
  ChildContainer,
  H4,
  H5
} from './styled'

class App extends Component {
  import
  static displayName = 'App'

  state = {
    parentPool: ''
  }



  componentDidMount() {
    this.createparentPool()
    this.canvasCtx = this
      .refs
      .appCanvas
      .getContext('2d')
    console.log(this.canvasCtx)
    this.canvasCtx.fillStyle = 'blue'
    this.canvasCtx.arc(75, 75, 50, 0, 2 * Math.PI)
    this.canvasCtx.fill()
  }

  createparentPool() {

    this.poolInterval = setInterval(() => {
      this.setState({
        parentPool: getRandom(1, 5)
      })
    }, 3000)

  }
// once component was mounted we can check inside and compare props 
  componentDidUpdate (prevProps, prevState) {
    if(prevState.parentPool !== this.state.parentPool){
      let {canvasCtx} = this
        canvasCtx.fillStyle = (this.state.parentPool % 2 === 1 ) ? "green" : "red"
        canvasCtx.arc(75,75,50,0,2 * Math.PI)
        canvasCtx.fill()
    }
  }

  // here we can check and see should we actually update component 
  // on number being changed
    shouldComponentUpdate(nextProps, nextState) {
//update if true
    if (nextProps.parentPool !== this.state.parentPool) {
      return true
    }
    // do not update
    return false
  }

// This is very important to clear interval when componen WillMount
// to make sure tat we will not have timers compiling on each other
  componentWillUnmount() {
      clearInterval(this.poolInterval)
  }

  // if component will update we will clear our cnvas to create new drawing
  componentWillUpdate (nextProps, nextState) {

      if ( nextState.parentPool !== this.state.parentPool){
        this.canvasCtx.clearRect(0,0,200,200)

      }
  }
  
  render() {
    // can still do JS here
    // destricturing our props from state 
    let {showPulChild, parentPool} = this.state
    return (
      <Parent>
 
        <H4>
          Parent pool : {parentPool}
        </H4>

        <Column>
          <canvas ref={"appCanvas"} height={200} width={200}/>

          <button
            onClick=
            {()=>{ this.setState((prevState)=>{ return{ showPulChild : !prevState.showPulChild } }) }}>
            {(showPulChild)
              ? "Hide"
              : "Show"}
            PollChild
          </button>

          {(showPulChild)
            ? (<PollChild parentPool={parentPool}/>)
            : null}

        </Column>
                {/* <Column>
                  <BigList/>
                </Column> */}
      </Parent>

    )
  }

}

class PollChild extends Component {

  static displayName = "PollChild"
  state = {
    pool: "No Data",
    infoStatus: 'Not Loaded'
  }

  componentDidMount() {
    this.pullData()
  }

  componentWillUnmount() {
    clearInterval(this.poolInterval)
  }



  pullData = () => {

    async function myFirstAsyncFunction() {
      // async function fill be loaded!
      let response = await fetch('http://api.icndb.com/jokes/random')
      let data = await response.json();
      // getting data we need
      let stuff = await data.value.joke
      return stuff
    }
    this.poolInterval = setInterval(() => {
      // here we call function and return promise   then we return data that we need
      // and set it as a state of the component
      myFirstAsyncFunction().then((data) => {
        // make a pool , get data and set state here
        console.log('pool')
        // this.setState({pool: data})
        this.setState({pool: data})
      })

      // this.setState({pool: getRandom(1,2)})

    }, 3000)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.parentPool !== nextState.parentPool) {
      return true
    }
    if (nextProps.pool != this.state.pool) {
      return true
    }

    return false
  }

  render() {
    console.log('Pull child rerender')
    return (

      <ChildContainer>
        <H4>
          pool: {this.state.pool}
        </H4>
        <H4>parent pool : {this.props.parentPool}</H4>
      </ChildContainer>

    )
  }

}

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.ceil(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

App = loggify(App)
// PollChild = loggify(PollChild)
// App.displayName = 'Whatever' App.defaultProps = {   array : [] }
export default App
