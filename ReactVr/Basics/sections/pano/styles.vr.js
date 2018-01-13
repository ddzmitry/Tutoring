// create react component
import React,{Component} from 'react';
import {AppRegistry,asset,Pano,View, Text,StyleSheet} from 'react-vr';


class Row extends Component {
  constructor(){
    super();
  }

  render(){

    return(
      // the way to add multible styles is {[{native styles i obj}, styles.whatever]}
        <View style={[{backgroundColor: this.props.color},styles.row]}>
            <Text style={styles.text} >{this.props.color} </Text>

        </View>        
    )
  }
}

export default  class Basics extends Component {
    constructor(){
      super();
} 

  // render
  render() {


    return(
      <View style={styles.container}>
      {/* use assets to pull an image to 3d atmosphere */}
        <Pano source={asset('starry-sky.jpg')} >
         <Row color='green'/>
         <Row color='red'/>
         <Row color='blue'/>
         
        </Pano>     
      </View>
    )

  }

};

  const styles = StyleSheet.create({
    text: {
      fontSize:0.2,
      textAlign:'center'
    },
    row:{
      width: 0.5,
      height:0.3,
      margin:0.1
    },
    container:{
      flex:1,
      width:3,
      flexDirection: 'row',
      transform: [{translate: [-1,0,-3]}]
    }
  })

AppRegistry.registerComponent('Basics',()=>Basics)