import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

class Demo extends Component{
      render(){
        return <div className="main_div_style"> <h1> Hello {this.props.name}</h1>
        <p> welcome to react app</p> </div>
      }
}

export default Demo
