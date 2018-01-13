// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View, Text,StyleSheet,Box} from 'react-vr';


export default  class Basics extends Component {
    constructor(){
      super();

      this.state = {

      }


} 

  // render
  render() {


    return(
      <View>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >
          <Box
            dimWidth={0.5}
            dimHeight={0.5}
            dimDepth={0.5}
            wireframe = {true}
            style = {{
              color: '#d22',
              transform: [
                {translate: [0, 0, -3]},
                // move up in Y coordinate
                {translateY:1},
                // remove X coordinate
                {translateX:-0.5},
                // rotation
                {rotateY:45},
                {rotateZ:45}
                
              ]

            }}
          />
        </Pano>     
      </View>
    )

  }

};

AppRegistry.registerComponent('Basics',()=>Basics)