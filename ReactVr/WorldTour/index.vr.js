import React, {
  Component
} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
} from 'react-vr';

// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';


const places = [
  {
    title:'Island Paradise'
  },
  {
    title:'Starry Night'
  },
  {
    title:'Winter Outdoors'
  },
  {
    title:'Light Show'
  },
]
class WorldTour extends Component {
  constructor(){
    super();
    this.state={
      showMenue:false,
      open: false
    }
  }
  toggleMenue(){
    this.setState({showMenue: !this.state.showMenue})
    
  }
  handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <View>
        <Pano source={asset('starry-sky.jpg')}></Pano>

        <View
         onEnter ={()=>this.toggleMenue()}
         style={style.menuButton}>
          <Text style={style.menueButtonText}>
          {this.state.showMenue ? 'Close Menue':'Open Menue'}
          </Text>
      </View>
      {
        this.state.showMenue ? 
          <View>
            <Text> Menue </Text>
            
          </View>:
          <View></View>


      }

      </View>
    )
  }
};

const style = StyleSheet.create({

  menuButton:{
    backgroundColor: '#fff',
    borderRadius: 0.25,
    width:0.5,
    height:0.5,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:0.01,
    transform: [
      {translate:[-2,0,-5]}
    ]

  },
  menueButtonText:{
    textAlign:'center',
    fontSize:0.15,
    color:'#000'
  }
})
AppRegistry.registerComponent('WorldTour', () => WorldTour);