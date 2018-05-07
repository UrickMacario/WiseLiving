import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(withGoogleMap((props) => <div>
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: 20.6855514, lng: -100.4557335 }}
        >
            {props.isMarkerShown}
        </GoogleMap>
  </div>
));

export default MyMapComponent;
