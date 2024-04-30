import React, { useEffect, useState } from 'react';

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDYQG_T93t_bOVE_nyd6t2fGG9UR1ctdy8&libraries=places`;
    googleMapsScript.async = true;
    googleMapsScript.defer = true;

    googleMapsScript.onload = () => {
      const currentLocation = { lat: 0, lng: 0 }; // Default location

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          currentLocation.lat = position.coords.latitude;
          currentLocation.lng = position.coords.longitude;

          const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
            center: currentLocation,
            zoom: 15,
          });

          setMap(mapInstance);
        });
      }
    };

    document.head.appendChild(googleMapsScript);
  }, []);

  // Function to add a marker with event details
  const addEventMarker = (lat, lng, eventDetails) => {
    if (map) {
      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: eventDetails,
      });

      // Add click event to the marker to display event details
      marker.addListener('click', () => {
        alert(`Event Details: ${eventDetails}`);
      });
    }
  };

  // Example usage of adding an event marker
  useEffect(() => {
    addEventMarker(0, 0, 'Sample Event Details');
  }, []);

  return <div id="map" style={{ height: '400px' }}></div>;
};

export default Map;
