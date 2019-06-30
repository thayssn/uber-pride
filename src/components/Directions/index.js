import React from "react";
import MapViewDirections from "react-native-maps-directions";
import { View } from "react-native";

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="API_KEY"
    strokeWidth={2}
    strokeColor="#DE3856"
  />
);

export default Directions;
