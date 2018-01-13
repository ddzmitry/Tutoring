// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View, Text} from 'react-vr';


class Task extends Component {

  constructor(props){

    super(props)
  }

  render() {

    let style = {
          textAlign: 'center',
          fontSize: 0.3,
        }

    return(
      <Text
        style = {style}
      > To do : {this.props.text} </Text> 
    )
  }
}


export default  class Basics extends Component {
  
  // render
  render() {

    return(
      <View>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >
         
        <View
          style ={{
            transform: [{translate:[0,0,-3]}],
            layoutOrigin: [0.5,0.5]
          }}
        >
            <Task text="Do Homework" />
            <Task text="Wash Dishes" />
            <Task text="Feed the cat " />
            

        </View>
          
        </Pano>     
      </View>
    )

  }

};
AppRegistry.registerComponent('Basics',()=>Basics)
