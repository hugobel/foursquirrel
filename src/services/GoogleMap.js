import loadGoogleMapsApi from 'load-google-maps-api';
import config from '../config';

class GoogleMap {
  constructor({ target, places, infoDiv, onMarkerClick}) {
    this.target = target;
    this.places = places;
    this.infoDiv = infoDiv;
    this.onMarkerClick = onMarkerClick;

    this.init(); 
  }

  init = async () => {
    const { callApi, drawMap, setStyles, setIcons, setInfoWindow, drawMarkers} = this;

    this.api = await callApi();
    this.map = await drawMap();
    setStyles();
    this.icons = await setIcons();
    this.infoWindow = await setInfoWindow();
    this.markers = await drawMarkers();
  }

  callApi = () => {
    return loadGoogleMapsApi({ key: config.apiKey });
  }

  drawMap = () => {
    const { api, target } = this;
    const options = config.map.options;

    return new api.Map(target, options);
  }
  
  setStyles = () => {
    const { api, map } = this;
    const options = config.map;
    const theme = new api.StyledMapType(
      options.theme, 
      { name: options.name }
    );

    map.mapTypes.set('fs_styledmap', theme);
    map.setMapTypeId('fs_styledmap');
  }

  setIcons = () => {
    const { api } = this;

    const regular = {
      url: config.map.icons.regular,
      size: new api.Size(23, 30),
      origin: new api.Point(0, 0),
      anchor: new api.Point(12, 30)
    };

    const gold = {
      ...regular,
      url : config.map.icons.gold
    }

    return { regular, gold };
  }

  setInfoWindow = () => {
    const { api, infoDiv } = this;

    return new api.InfoWindow({
      content: infoDiv
    });
  }

  setInfoContent = (i, place) => {
    const { api, markers, infoWindow, onMarkerClick } = this;

    const isFav = () => markers[i].getIcon().url === config.map.icons.gold;
    
    const content = document.createElement('div');
      content.className = 'info-window';
      content.innerHTML = `<p class="info-title">${place.Name}</p>`
        +`<p class="info-details">${place.Address}</p>`;

    const button = content.appendChild(document.createElement('input'));
      button.type = 'button';
      button.className = `button-star ${isFav() ? 'remove' : 'add'}`;

    api.event.addDomListener(button, 'click', () => { 
      button.className = `button-star ${!isFav() ? 'remove' : 'add'}`;
      onMarkerClick(i);
      infoWindow.setContent(content);
    });

    return content;
  }

  drawMarkers = () => {
    const { api, map, places, icons, setInfoContent } = this;

    return places.map((place, i) => {
      if (!place || !place.location) return null;

      const markerOptions = {
        map, 
        icon: !!place.favorite ? icons.gold : icons.regular,
        position: place.location
      };

      const marker = new api.Marker(markerOptions);

      marker.addListener('click', () => {
        const content = setInfoContent(i, place);
        this.infoWindow.setContent(content);
        this.infoWindow.open(map, marker);
      });

      return marker;
    });
  }

  toggleMarkerFav = (i, isFav) => {
    const { markers, icons } = this;
    
    markers[i].setIcon(isFav ? icons.gold : icons.regular);
  }
}

export default GoogleMap;