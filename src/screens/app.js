import React, { Component } from 'react'

import Form from '../containers/form'
import image from '../assets/imgs/woman.jpg'

class App extends Component {
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="col-left">
            <div className="left-side">
              <div className="card">
                <img src={image} alt="Woman" />
                <div className="card-legend">
                  <p className="text">"Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."</p>
                  <p className="name"><b>Camila Bragança</b>,<br />Sideral Tecnologia</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-right">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default App
