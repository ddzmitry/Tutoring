// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View} from 'react-vr';

export default  class Basics extends Component {
  
  // render
  render() {

    return(
      <View>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >

        </Pano>     
      </View>
    )

  }

};
AppRegistry.registerComponent('Basics',()=>Basics)
