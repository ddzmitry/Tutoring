import React,{Component} from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Header extends Component {


  authButton(){

        if(this.props.authenticated){
            // changing auth through the action creator that avaliable via props
            return <button onClick= {()=>{this.props.authenicate(false)}} > Sign Out</button>
        } else{
            return <button onClick= {()=>{this.props.authenicate(true)}} > Sign In</button>
        }
      
  }
  render() {
    
    return (
        <nav className="navbar navbar-light">
       
            <ul className="nav navbar-nav">

                <li className="nav-item">
                <Link to="/"> Home </Link>
                </li>

                <li className="nav-item"  >
                <Link to="/resources"> Resources </Link>
                </li>

                <li className="nav-item">
                    {this.authButton()}
                </li>
            </ul>
        </nav>
    )
  }

}
const mapStateToProps = (state) => {

    return {
        // taking from reducers
        // because combine reducers stored in the combine reducer
        authenticated: state.authenticated
    }
}
export default connect(mapStateToProps,actions)(Header);
