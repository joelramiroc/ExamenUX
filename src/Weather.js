import React, { Component } from 'react';
import './list.css';



class JSon extends Component {
    constructor(props){
        super(props)
            this.state =
            {
        }
    }

    render() {
        var result = 'http://api.openweathermap.org/data/2.5/weather?q=Yoro,Hn&appid=851d5b33569b7c1a2e15edb5270db02d&units=metric';

        return (
            <ul className = "ulList">
                <li>
                    <div>
                        {/* <h2>CIUDAD</h2> */}
                        <h2>{result.name}</h2>
                    </div>
                </li>
                <li>
                    <div>
                        {/* <h2>TEMPERATURA</h2> */}
                        <h2>{result.temp}</h2>
                    </div>
                </li>
                <li>
                    <div>
                        {/* <h2>HUMEDAD</h2> */}
                        <h2>{result.humidity}</h2>
                    </div>
                </li>
            </ul>
        );
    }
  }

  export default JSon;