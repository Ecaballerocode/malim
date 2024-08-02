// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./VistaPrincipal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../Logo/LogoBlanco.png"
import { faList, faTruck, faShoppingCart, faMoneyBillWave, faBoxes, faChartBar } from '../icons'; // Importar íconos desde icons.js

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      <img src={Logo} alt='logotipo' className='logo'></img>
      <p>Elige qué acción quieres realizar</p>
      <div className="button-grid">
        <button onClick={() => handleNavigation('/pedidos')}>
          <FontAwesomeIcon icon={faList} style={{color: "#FFD43B",}} size="2x" />
          <span>Pedidos</span>
        </button>
        <button onClick={() => handleNavigation('/entregas')}>
          <FontAwesomeIcon icon={faTruck} style={{color: "#1B78F2",}} size="2x" />
          <span>Entregas</span>
        </button>
        <button onClick={() => handleNavigation('/compras')}>
          <FontAwesomeIcon icon={faShoppingCart} style={{color: "#A7EBF2",}} size="2x" />
          <span>Compras</span>
        </button>
        <button onClick={() => handleNavigation('/por-cobrar')}>
          <FontAwesomeIcon icon={faMoneyBillWave} style={{color: "#F28A2E",}} size="2x" />
          <span>Por Cobrar</span>
        </button>
        <button onClick={() => handleNavigation('/inventario')}>
          <FontAwesomeIcon icon={faBoxes} style={{color: "#F25244",}} size="2x" />
          <span>Inventario</span>
        </button>
        <button onClick={() => handleNavigation('/estadistica')}>
          <FontAwesomeIcon icon={faChartBar} style={{color: "#95D904",}} size="2x" />
          <span>Estadística</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

