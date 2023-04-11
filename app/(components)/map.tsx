"use client";

import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.696836,
  lng: -79.521535,
};

const options = {
  disableDefaultUI: true,
  styles: [
    {
      featureType: "poi",
      stylers: [{ visibility: "off" }],
    },
  ],
};

const Map: React.FC<{ address: string }> = ({ address }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.REACT_APP_GOOGLE_MAPS_API_KEY ||
      "AIzaSyDMuQfUpvz761OqWmwvxZ2a3EYAPrMBf-E",
  });

  const [position, setPosition] = useState(center);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [myMarker, setMyMarker] = useState<google.maps.Marker | null>(null);
  const [infoWindow, setInfoWindow] = useState<google.maps.InfoWindow | null>(
    null
  );

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: "My Marker",
    });
    setMyMarker(marker);
    const infowindow = new google.maps.InfoWindow({
      content: "468 Fairview Heights Drr",
    });
    setInfoWindow(infowindow);
    infowindow.open(map, marker);
    marker.addListener("click", () => {});
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={12}
      onLoad={onLoad}
      options={options}>
      <Marker
        position={position}
        onClick={() => {
          infoWindow?.open(map!, myMarker);
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
