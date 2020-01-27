import React,{Component} from 'react';



class Avatarlist extends Component{
  render(){
    return (
      <div className="avatar-style ma2 bg-light-purple dib pa4 tc grow shadow-4">
          <img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt="avatar not found"/>
          <h1> {this.props.name} </h1>
          <p> {this.props.work} </p>
          </div>

    )

  }
}

export default Avatarlist;
