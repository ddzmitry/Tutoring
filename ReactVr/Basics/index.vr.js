// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View, Text,StyleSheet,Box} from 'react-vr';


export default  class Basics extends Component {
    constructor(){
      super();

      this.state = {
        fontSize:0.1
      }
} 

  // render
  render() {


    return(
      <View>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >
          <Text
          onEnter = {()=> this.setState({fontSize:0.2})}
          onExit = {()=> this.setState({fontSize:0.1})}
          
          style={{
            fontSize: this.state.fontSize,
            transform: [{translate:[0,0,-2]}],
              
          }}
          > Hover over me! </Text>
          </Pano>
      </View>
    )

  }

};

AppRegistry.registerComponent('Basics',()=>Basics)