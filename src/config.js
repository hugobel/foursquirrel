const config = {
  apiKey : 'AIzaSyAAFlfVwuEBNh3fT2ye-7TxvaNkNSdtmbw',
  map: {
    name: 'fourSquirrel',
    options: {
      zoom: 12,
      center: {
        lat: 19.432608,
        lng: -99.133209
      },
      mapTypeControl: false
    },
    icons: {
      regular: 'https://s3.amazonaws.com/hugobeldemos/foursquirrel/acorn.png',
      gold : 'https://s3.amazonaws.com/hugobeldemos/foursquirrel/acorn-gold.png'
    },
    theme: [
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { visibility: 'simplified' },
          { lightness: 20 }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
          { hue: '#ff8600' },
          { lightness: '-5' },
          { saturation: '-40' }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
          { visibility: 'simplified' },
          { hue: '#00a4ff' },
          { saturation: '-100' },
          { weight: '0.01' }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { hue: '#fad959' }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          { visibility: 'simplified' }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [
          { visibility: 'simplified' }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          { hue: '#00a4ff' },
          { saturation: '-35' },
          { lightness: '8' }
        ]
      }
    ]
  }
};

export default config;