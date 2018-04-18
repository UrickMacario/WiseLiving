import React, {Component} from 'react';
import Map from './location_map';

export default class Location extends Component {
    render(){
        return(
            <section className="Location">
                <div className="Location-header">
                    <div className="Location-header-left">
                        <h2 className="Location-header-title">Ubicación</h2>
                        <p className="Location-header-address">Anillo Vial Fray Junipero Sierra 22650, Juriquilla, Querétaro.</p>
                    </div>
                    <div className="Location-header-right">
                        <p className="Location-header-text">Con una ubicación privilegiada, a tan sólo 20 minutos del centro de Querétaro, en la exclusiva zona de Juriquilla, el desarrollo residencial asegura la plusvalía de inversión con una infraestructura urbana sólida que integra funcionalidad, comodidad y facilidad de acceso.</p>
                    </div>
                </div>
                <div className="Location-map">
                    <Map isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGX_KmY-Ykn0S9zopxqKdSJT2htEfh54M"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
                </div>
            </section>
        );
    }
}
