import React, { Component } from 'react';
import './App.css';
import './skeleton.css'
import Weater from './Weather';
import Form from './Form';

class App extends Component {
  constructor()
  {
    super()
    this.state ={
        requestFailed : false,
        API_KEY : '851d5b33569b7c1a2e15edb5270db02d',
        city:'',
        country:''
      }
    }



    render() {
      return (
        <div className="App-header">
            <Form ></Form>
            <Weater ></Weater>
        </div>
      );
    }
  }

  export default App;
