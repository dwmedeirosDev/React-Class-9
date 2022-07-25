// styled-component
// Instalar o style-component no terminal => npm install styled-components
// Importar o style-component => import styled from 'styled-components' 

import React, { Component } from 'react'
import styled from 'styled-components' 

export const Calculadora = styled.div`
    background-color: blueviolet;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;

  input{
    width: 40%;
    padding: 0.8rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  div{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  button{
    background-color: white;
    border: none;
    width: 40px;
    height: 30px;
    cursor: pointer;
  }

  h2{
    width: 40%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default class App extends Component{
    state = {
        n1: '',
        n2: '',
        resultado: ''
      }
    
      divisao = () => {
        this.setState({
          resultado: this.state.n1 / this.state.n2
        })
      }

// Buscando valor do Input

    handleChange1 = (event) => {
        this.setState({
        n1:event.target.value
        })
    }

    handleChange2 = (event) => {
        this.setState({
        n2: event.target.value
        })
    }

    render(){
        return(
            <Calculadora>
                <h1>Calculadora</h1>
                <input type="number" onChange={this.handleChange1} />
                <input type="number" onChange={this.handleChange2}/>
                <div>
                    <button>+</button>
                    <button>-</button>
                    <button onClick={this.divisao}>/</button>
                    <button>*</button>
                    <button>c</button>
                </div>
                <h2>{this.state.resultado}</h2>
            </Calculadora>
        )
    }
}