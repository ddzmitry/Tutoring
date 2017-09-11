import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { setClues } from '../actions';
import Clue from './Clue';

export class Category extends Component {
  constructor() {


    super();

    this.state = ({
        clues : []
    })

   
  }

  render() {

    return (
        <div>
 
            <h2>{this.props.category.title}</h2>
            {
                this.state.clues.map((clue)=>{
                return (
                        <Clue key={clue.id} clue={clue} />
                    );})}
            
    
            
        </div>
    );
  }

  componentDidMount() {
        fetch(`http://jservice.io/api/clues?category=${this.props.category.id}`)
        .then(response => response.json())
        //using action creator to set up clues
        .then(json => this.setState({clues : json}))
        
  }
}
//need fo testing to d not render the link and we pass it to indx.js app 
    export class LinkedCategory extends Component{
        render(){
            return (
              <div> 
                      <Link className='link-home' to='/'><h4>Home </h4></Link>   
                      <Category category={this.props.category} />
              </div> 
            );
        }
    }

const mapStateToProps = (state) => {
    return {
        // picking up funciton clues from reducer and category
        category: state.category,
        clues: state.clues
    }
}
export default connect(mapStateToProps,{setClues})(LinkedCategory);
