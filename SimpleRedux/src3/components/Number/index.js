import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addNumber,changeColor,getPicture} from '../../actions'
class Number extends Component {
  constructor() {
    super();

    this.state = {
        pictures : []
    }
  }

  renderPics(){
      if (this.state.pictures){
            
this.state.pictures.map( pic => {console.log(pic.images.fixed_height.url) })
            
            
       
      }
  }
  FunStuff(){

    this.props.addNumber(this.props.number)
    this.props.changeColor(this.props.color)
    this.props.getPicture()
    if(this.props.picture){

        this.props.picture.then(data => data.json())
        .then(pic => this.setState({pictures:pic.data}))
    }
  }

  render() {
    //   this.props.changeColor(this.props.color)
      
    return <div>
    
    {this.state.pictures.map( pic => {
        return <img src={pic.images.fixed_height.url} alt=""/>
    })}

    <h2
    style={{backgroundColor:this.props.color}}>
    {this.props.number}</h2>
        <button onClick={()=>this.FunStuff()}> Add number </button>


    {
        this.renderPics()
    }

    </div>;




  }

  componentDidMount() {
    // this.setState({ someKey: 'otherValue' });
  }
}
const mapStateToProps = (state) => {
    console.log('state')
    console.log(state)
    return {
        number: state.number,
        color: state.color,
        picture: state.picture

    }
}


export default connect(mapStateToProps,{addNumber,changeColor,getPicture})(Number)