import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import HealthyShopIcon from "../../assets/icons8-healthy-100.png"

// Define custom icons
const currentLocationIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});
const healthyShopIcon = L.icon({
  iconUrl: HealthyShopIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Define the function to fetch nearby shops
const fetchNearbyShops = async (latitude, longitude) => {
    try {
      const response = await fetch(`/map?latitude=${latitude}&longitude=${longitude}`);
      if (!response.ok) {
        throw new Error('Failed to fetch nearby shops');
      }
      const data = await response.json();
      return data.results.map(result => ({
        id: result.id,
        name: result.name,
        location: [result.geometry.location.lat, result.geometry.location.lng]
      }));
    } catch (error) {
      console.error('Error fetching nearby shops:', error);
      return []; // Return empty array or handle error as needed
    }
  };

const Map = () => {
  const [map, setMap] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [nearbyShops, setNearbyShops] = useState([]);

  useEffect(() => {
    // Initialize map
    const leafletMap = L.map('leaflet-map').setView([28.6139, 77.209], 13); // Default to New Delhi
    setMap(leafletMap);

    // Add a tile layer (OpenStreetMap as an example)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    // Get current location using Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);

          // Center map on current location
          leafletMap.setView([latitude, longitude], 13);

          // Add marker for current location
          L.marker([latitude, longitude], { icon: currentLocationIcon }).addTo(leafletMap)
            .bindPopup('You are here')
            .openPopup();

          // Fetch nearby shops using Google Places API
          const nearbyShopsData = await fetchNearbyShops(latitude, longitude);
          setNearbyShops(nearbyShopsData);

          // Add markers for nearby shops
          nearbyShopsData.forEach(shop => {
            L.marker(shop.location, { icon: healthyShopIcon }).addTo(leafletMap)
              .bindPopup(`${shop.name}`);
          });
        },
        error => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div id="leaflet-map" style={{ height: '400px', width: '100%' }} />
  );
};

export default Map;
