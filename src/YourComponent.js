import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStores, setStores } from './actions/store';
import storeLocator from './services/storeLocator';

import Map from './components/Map';
import Preloader from './components/Preloader';
import Splash from './components/Splash';

import directory from './store_directory.json';

class YourComponent extends Component {
  componentDidMount() {
    const { stores, setStores, fetchStores } = this.props;

    if (!stores.length){
      storeLocator(directory, fetchStores)
        .then(setStores);
    }
  }

  render() {
    const { stores, isLoading } = this.props;

    if (isLoading) return <Preloader />;

    if (stores.length > 0) return <Map markers={stores} />;

    return <Splash />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading,
  stores: state.stores
});

const mapDispatchToProps = dispatch => ({
  fetchStores: payload => dispatch(fetchStores(payload)),
  setStores: payload => dispatch(setStores(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(YourComponent);
