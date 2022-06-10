import logo from './logo.svg'
import React from 'react';
import './LoadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className="loadingScreen">
            <img src={logo} className="App-logo" alt="logo-spinner" />
            <h1>Cargando productos...</h1>
        </div>
    )
}

export default LoadingScreen;