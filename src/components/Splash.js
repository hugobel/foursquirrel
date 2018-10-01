import React from 'react';
import logo from '../images/4sq.svg';

const styles = {
  width: '25%',
  minWidth: '250px',
  maxWidth: '480px',
  margin: '25vh auto'
};

const Splash = () => (
  <img src={logo} style={styles} alt="splash screen"/>
);

export default Splash;
