import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setCategories,pickCategory } from '../actions';
import { Link } from 'react-router-dom';

export class App extends Component {
  constructor() {
      
    super();
   
  }

  render() {

    return (
        <div> 
            <h2>Jeopardy! </h2>

            {
                this.props.categories.map((category)=>{

                    return (
                        <div key={category.id}>
                            <Link to='/category' onClick={()=> this.props.pickCategory(category)}> 
                            
                            <h4>{category.title}</h4>
                            
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
  }

  componentDidMount() {

    // do it once 
    if(this.props.categories.length === 0 ){
        fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        // using action creator 
        .then(json => this.props.setCategories(json))
  }

    }



}
// so here we pass function from actions
// and return new state and key is going to be categories
const mapStateToProps = (state) => {
    return {
        // state is allcombinereducer
        categories : state.categories
    }
}


export default connect(mapStateToProps, {setCategories,pickCategory} )(App);
