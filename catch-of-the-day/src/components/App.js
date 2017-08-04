import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from  '../../src/sample-fishes';
import base from '../base';

class App extends React.Component {

    constructor(){

     super();
      this.loadSamples = this.loadSamples.bind(this)
      this.addFish = this.addFish.bind(this)
      this.addtoOrder = this.addtoOrder.bind(this)
      this.updateFish = this.updateFish.bind(this)
      this.removeFish = this.removeFish.bind(this)
      this.removeFromOrder = this.removeFromOrder.bind(this)
      this.state = {
        fishes: {},
        order: {}
      }; 
    }
    
    componentWillMount () {

        // this runs befor app os rendered

        this.ref = base.syncState(`${this.props.params.storeId}/fishes`,{
            context: this,
            state: 'fishes'
        });

        // check if there is anything in local storage

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      // update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }

        
       
    }

    componentWillUnmount () {
        base.removeBinding(this.ref)
    }

    componentWillUpdate (nextProps, nextState) {

        localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
        // console.log('something changed')
        // console.log({nextProps,nextState});

    }
    
          
    addFish(fish){
        //object spread
        const fishes = {...this.state.fishes};
        //add in new fish
        const timeStamp = Date.now();
        //timestam is a key! 
        fishes[`fish-${timeStamp}`] = fish;
        //set a new state
        this.setState({fishes:fishes})

        // udate state 
        //set state
    }

    loadSamples(){
        this.setState({
            fishes: sampleFishes
        })

    }
    // newFish! 
    updateFish(key,updatedFish){

        const fishes  = {...this.state.fishes};
        fishes[key] = updatedFish;
        
        this.setState({
            fishes
        })
    }

    removeFish(key){
        const fishes  = {...this.state.fishes};
        fishes[key] = null;
        this.setState({fishes});


    }
    removeFromOrder(key){

      const order  = {...this.state.order};
            console.log(order)
           order[key] = null;
           delete order[key]
        this.setState({order});      
    }


    addtoOrder(key){

    const order = {...this.state.order};

    // update or add ne number fish
        order[key] = order[key] +1 || 1;
        this.setState({order});

    }
    render() {

        return (

            <div className="catch-of-the-day">

                <div className="menu">

                    <Header tagline="Fresh Seafood Market"/>

                    <ul className="list-of-fishes">

                        { Object.keys(this.state.fishes)
                            .map((key)=> <Fish addtoOrder = {this.addtoOrder} index={key} key={key} details={this.state.fishes[key]} /> )

                        }

                           
                    
                    </ul>
                        
                </div>
                <Order
                removeFromOrder ={this.removeFromOrder}
                fishes={this.state.fishes} 
                order={this.state.order}
                params = {this.props.params}
                />
                <Inventory
                removeFish = {this.removeFish}
                fishes={this.state.fishes} 
                loadSamples={this.loadSamples} 
                addFish = {this.addFish}
                updateFish = {this.updateFish}
                storeId = {this.props.params.storeId}
                />

            </div>
        )
    }
}

App.propTypes = {
    params: React.PropTypes.object.isRequired
}

export default App;