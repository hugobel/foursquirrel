import React, { Component, createRef } from 'react';
import {connect} from 'react-redux';
import GoogleMap from '../services/GoogleMap';
import { toggleStoreFav } from '../actions/store';

const styles = {
  height: '100%'
};

class Map extends Component {
  constructor() {
    super();

    this.mapRef = createRef();
  }

  componentDidMount() {
    const { markers, toggleStoreFav } = this.props; 
    const target = this.mapRef.current;

    const options = {
      target,
      places: markers,
      onMarkerClick: toggleStoreFav
    };

    this.googleMap = new GoogleMap(options);
  }

  componentDidUpdate(prevProps) {
    const { markers } = this.props;

    const i = markers.findIndex((marker, i) => (
      prevProps.markers[i].favorite !== marker.favorite
    ));
    
    this.googleMap.toggleMarkerFav(i, !!markers[i].favorite);
  }
 
  render() {

    return (
      <div ref={this.mapRef} style={styles} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleStoreFav : payload => dispatch(toggleStoreFav(payload))
});

export default connect(
  null,
  mapDispatchToProps
)(Map);