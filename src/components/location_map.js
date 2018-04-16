import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) => <div>
        <GoogleMap
            defaultZoom={18}
            defaultCenter={{ lat: 20.6861436, lng: -100.458405 }}
        >
            {props.isMarkerShown && <Marker position={{ lat: -20.6861436, lng: -100.458405 }} />}
        </GoogleMap>
  </div>
));

export default MyMapComponent;
