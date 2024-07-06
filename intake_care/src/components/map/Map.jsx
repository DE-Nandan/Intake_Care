import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import HealthyShopIcon from "../../assets/icons8-healthy-100.png";

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
  const [routingControl, setRoutingControl] = useState(null);
  const [routeDetails, setRouteDetails] = useState(null);
  const [selectedShopName, setSelectedShopName] = useState(null);

  useEffect(() => {
    // Initialize map
    const leafletMap = L.map('leaflet-map').setView([28.6139, 77.209], 13); // Default to New Delhi
    setMap(leafletMap);

    // Add a tile layer (OpenStreetMap as an example)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(leafletMap);

    // Initialize routing control but don't add to map yet
    const newRoutingControl = L.Routing.control({
      routeWhileDragging: true,
      createMarker: () => null // Don't create default markers
    });
    setRoutingControl(newRoutingControl);

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
            const marker = L.marker(shop.location, { icon: healthyShopIcon }).addTo(leafletMap)
              .bindPopup(`${shop.name}`);

            // Add click event listener to show route and distance
            marker.on('click', () => {
              calculateAndDisplayRoute([latitude, longitude], shop.location, leafletMap, shop.name);
            });
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

  const calculateAndDisplayRoute = (start, end, map, shopName) => {
    // Remove previous routing control if exists
    if (routingControl) {
      map.removeControl(routingControl);
    }

    // Create new routing control
    const newRoutingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1])
      ],
      routeWhileDragging: true,
      createMarker: function() { return null; } // Disable markers on the route line
    }).addTo(map);

    // Handle route found event to update route details
    newRoutingControl.on('routesfound', function(e) {
      const routes = e.routes;
      const summary = routes[0].summary;
      const routeInfo = `Distance: ${(summary.totalDistance / 1000).toFixed(2)} km, Time: ${Math.round(summary.totalTime / 60)} minutes`;
      setRouteDetails(`${shopName}: ${routeInfo}`);
      setSelectedShopName(shopName);
    });

    // Update routing control in state
    setRoutingControl(newRoutingControl);
  };

  return (
    <div>
      <div id="leaflet-map" style={{ height: '400px', width: '100%' }} />
      {routeDetails && (
        <div className="route-details">
          <h3>Route Details for {selectedShopName}</h3>
          <p className='text-white'>{routeDetails}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
