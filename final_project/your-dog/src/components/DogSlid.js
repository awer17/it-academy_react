import React from 'react';
import './DogSlid.css'
import affenpinscher from '../img/affenpinscher.jpeg'

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

  // fetchError = (errorMessage) => {
  //   alert(showStr);
  // };

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
    // в response - http-ответ
    if ( !response.ok ) {
      this.fetchError("fetch error " + response.status);
    }
    else {
      const data=await response.json();
      // в data - пришедшие в ответе данные
      this.fetchSuccess(data);
    }

  };

  // loadData = () => {

  //   fetch("https://dog.ceo/api/breeds/list/all", {
  //       method: 'post',
  //       headers: {
  //           "Accept": "application/json",
  //       },
  //   })
  //       .then( response => { // response - HTTP-ответ
  //           if (!response.ok)
  //               throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
  //           else
  //               return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
  //       })
  //       .then( data => {
  //           this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
  //       })
  //       .catch( error => {
  //           this.fetchError(error.message);
  //       })
  //   ;
  // };

  render(){
    

    if ( !this.state.dataReady )
    return <div>загрузка данных...</div>;

    return (

      <div className='item' >
        <img src={this.state.clients}  alt="photo unavailable" />
        {/* <img src={props.elem.photo}  alt="photo unavailable" /> */}
        <p className="title">{this.props.elem.name}</p>
        <p >{this.props.elem.short_description}</p>
        <p >size at the withers: {this.props.elem.size_at_the_withers}</p>
        <p >friendliness: {this.props.elem.friendliness}</p>
        <input type="button" value="Add to comparison"/>
      </div> 
    );
  }
}

// export default DogSlid


// export const DogSlid = (props) => {
//   return (
//     <div className='item' >
//       <img src={affenpinscher}  alt="photo unavailable" />
//       {/* <img src={props.elem.photo}  alt="photo unavailable" /> */}
//       <p className="title">{props.elem.name}</p>
//       <p >{props.elem.short_description}</p>
//       <p >size at the withers: {props.elem.size_at_the_withers}</p>
//       <p >friendliness: {props.elem.friendliness}</p>
//       {/* <input type="button" value="Add to comparison"/> */}
//     </div> 
//   );
// };
