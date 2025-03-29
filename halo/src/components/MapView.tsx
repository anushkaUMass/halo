import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '60vw',
  height: '60vh',
  borderRadius: '16px',
};

const center = {
  lat: 40.7128,
  lng: -74.0060,
};
// console.log('API Key:', process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const cuteMapStyle: google.maps.MapTypeStyle[] = [
  {
    featureType: "road",
    stylers: [
      { hue: "#5e00ff" },
      { saturation: -79 }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      { saturation: -78 },
      { hue: "#6600ff" },
      { lightness: -47 },
      { visibility: "off" }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      { lightness: 22 }
    ]
  },
  {
    featureType: "landscape",
    stylers: [
      { hue: "#6600ff" },
      { saturation: -11 }
    ]
  },
  {
    featureType: "water",
    stylers: [
      { saturation: -65 },
      { hue: "#1900ff" },
      { lightness: 8 }
    ]
  },
  {
    featureType: "road.local",
    stylers: [
      { weight: 1.3 },
      { lightness: 30 }
    ]
  },
  {
    featureType: "transit",
    stylers: [
      { visibility: "simplified" },
      { hue: "#5e00ff" },
      { saturation: -16 }
    ]
  },
  {
    featureType: "transit.line",
    stylers: [
      { saturation: -72 }
    ]
  }
];


const MapView = () => {
  return (
    
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options = {{styles: cuteMapStyle}}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapView;
