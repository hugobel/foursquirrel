import React from 'react';
import logo from '../images/acorn.svg';

const styles = {
  width: '25%',
  minWidth: '250px',
  maxWidth: '480px',
  margin: '25vh auto 0'
};

const Preloader = () => (
  <React.Fragment>
    <img src={logo} style={styles} className="loader" alt="preloader" />
    <p>Loading stores information</p>
  </React.Fragment>
);

export default Preloader;
