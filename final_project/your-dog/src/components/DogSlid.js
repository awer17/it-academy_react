import React from 'react';
import './DogSlid.css'
import { NavLink } from 'react-router-dom';
import {Detals} from './Detals';

export class DogSlid extends React.PureComponent{

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.loadData();
  }

  state = {
    dataReady: false,
    name: "???",
    clients: "",
  };
  fetchSuccess = (loadedData) => {
    let imgSrc = loadedData.message;
    this.setState({
      dataReady:true,
      name:loadedData.companyName,
      clients:loadedData.message,
      dogMane :this.props.elem.name.split(' ')[0]
    });
  };

  loadData = async () => {
    const response  = await fetch(`https://dog.ceo/api/breed/${this.props.elem.nameDog}/images/random `, {
      method: 'get',
      headers: {
        "Accept": "application/json",
      },
    });
    if ( !response.ok ) {
      this.fetchError("fetch error " + response.status);
    }
    else {
      const data=await response.json();
      this.fetchSuccess(data);
    }
  };

  render(){


    if ( !this.state.dataReady )
    return <div className='item'>загрузка данных...</div>;

    return (
      <div className='item' >
        <img src={this.state.clients}  alt="photo unavailable" />
        <p className="title">{this.props.elem.name}</p>
        <p >{this.props.elem.short_description}</p>
        <p >size at the withers: {this.props.elem.size_at_the_withers}</p>
        <p >friendliness: {this.props.elem.friendliness}</p>
        <input type="button" value="Add to comparison"/>
        <NavLink to="/detals" >
          <Detals code={[this.props.elem.code, this.state.clients]}/>
        </NavLink>
      </div> 
    );
  }
}

