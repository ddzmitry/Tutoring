import React , {Component} from 'react';
import { connect } from 'react-redux';

// HOC COMPONENT
export default function(ComposedComponent){
    class Authenification extends Component {
        //  to be able to push router from main index 
        static contextTypes = {
            router : React.PropTypes.object
        }

        
        componentWillMount () {
            // push to home route if not authenificated
                if(!this.props.authenticated){
                    
                    this.context.router.push('/');
                }
        }
        componentWillUpdate (nextProps) {
            // when user logged out to be able to kick out from thw page
            if(!nextProps.authenticated){
                
                this.context.router.push('/');
            }
        }
        
        
        render(){
           // console.log('Rendering',ComposedComponent )
           // and here based of the props we can see if user can acces the secret component
           

                return <ComposedComponent {...this.props}/>
            
            
        }
    }
    
            // here we can see the state of the authenticated
            // and it will be avaliable as a props to check
        const mapStateToProps = (state) => {
            return {
                authenticated: state.authenticated
            }
        }

    return connect(mapStateToProps,null)(Authenification)
}
/*  
In some other location we want to use this component
we use this HOC
*/
//import Authenification // This is HighOrderComponen
//import Resources // this is component to wrap 

// /const ComposedComponent = Authenification(Resources)

// In some render method < ComposedComponent/>