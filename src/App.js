import React , {Component } from 'react'
import './App.css'

export class App extends Component{
  state = {
    profileImg: 'https://images.creativetemplate.net/wp-content/uploads/2018/02/Blank-Menu-Design-Template.png'
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        this.setState({profileImg: reader.result })
        
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  componentDidMount(){
    fetch("https://lit-fjord-92060.herokuapp.com", {
      "method": "GET",
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
        "content-type": "application/json",
        "accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });
  }


  render(){
    const {profileImg} = this.state
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading"> One Food Stop Application </h1>
            <h2 className="heading" > Upload your food picture </h2>
          <div className="img-holder" >
            <img src={profileImg} alt ="" id="img" className="img"/>
          </div>
          <input type = "file" name = "image-upload" id = "input" accept = "image/*" onChange={this.imageHandler}/>
          <div className="label" >
            <label htmlFor="input" className="image-upload">
              <i className="material-icons"> add_photo_alternate </i>
              Choose your food photo
            </label>
          </div>
        </div> 
      </div>
      
    )
  }
}
export default App