import React, { Component } from 'react';
import './skeleton.css'

class Form extends  Component {
    constructor(props){
        super(props)
            this.state ={
        }
        this.setCity = this.setCity.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }

    componentDidMount() {
        this.setCity(this.state.city);
        this.setCountry(this.state.country);
      }

     setCity (e) {
        const name = e.target.name;
          const value = e.target.value;
        this.setState( {
            city: value
        });
       }

       setCountry (e) {
        const name = e.target.name;
          const value = e.target.value;
        this.setState( {
            country: value
        });
       }

    componentDidMount()
    {
    }

    render() {
        return (
            <div>
              <input type = "text"
                onChange = {this.setCity}
                name = "city"/>
            <input type = "text"
            onChange = {this.setCountry}
            name = "country"/>
            <button onClick={this.Updatestate}>Obtener Clima</button>
          </div>
        );
    }
  }

  export default Form;