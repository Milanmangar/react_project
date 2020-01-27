import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

//name

class Avatar extends Component{

  constructor(){
    super();
    this.state = {
      name : "Welcome to Avatar World!",
      buttonname : "Subscribe"
    }
  }

  nameChange(){
    this.setState({
      name : "Subscribed to World of Avatar!",
      buttonname : "Subscribed"
    })
  }

  render(){
    const avatarlistarray = [
      {id:1,name:'milan',work:'web developer'},
      {id:1,name:'kiran',work:'front developer'},
      {id:1,name:'hemant',work:'sql developer'},
      {id:1,name:'imran',work:'oracle developer'}

    ]

    const arrayavatarcard = avatarlistarray.map((avatarcard, i) =>
  {
    return <Avatarlist key={i} id={avatarlistarray[i].id} name={avatarlistarray[i].name} work={avatarlistarray[i].work}/>
  })
    return (
      <div className='main-page'>
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
          <div className="button-div">
            <button className='button-s' onClick={() => this.nameChange()}>{this.state.buttonname}</button>
          </div>
      </div>
        )

  }
}





export default Avatar;
