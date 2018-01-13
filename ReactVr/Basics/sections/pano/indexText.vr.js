// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View, Text} from 'react-vr';



export default  class Basics extends Component {
    constructor(){
      super();


      this.state = {
        showSign: true
      }

      setInterval(()=> this.setState({showSign: !this.state.showSign}),1000)


} 

  // render
  render() {

    console.log(this.state)
    let message = this.state.showSign==true ? 'Welcome To React VR' : '';

    return(
      <View>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >

        <Text style = {{
          fontSize: 0.1,
          transform: [{translate:[-1,0,-2]}]
        }}>
         {message}
        </Text>
         
        </Pano>     
      </View>
    )

  }

};
AppRegistry.registerComponent('Basics',()=>Basics)
