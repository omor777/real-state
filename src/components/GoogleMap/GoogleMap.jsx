import GoogleMapReact from "google-map-react";
import { APIKey } from "../../firebase/firebase.init";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = () => (
  <div>
    <FaMapMarkerAlt className="text-4xl text-red-500" />
  </div>
);

export default function SimpleGoogleMap({ latitude, longitude }) {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 8,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.latitude}
          lng={defaultProps.center.longitude}
        />
      </GoogleMapReact>
    </div>
  );
}
