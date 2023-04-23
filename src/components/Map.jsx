import { useState, useEffect } from "react";
import L from 'leaflet';

const Map = ({ address }) => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude]  = useState(null);

    const address2 = "1600 Pennsylvania Avenue NW, Washington, DC 20500";
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURI(address)}`;
    const zoomLevel = 13;

    const createMap = (lat, lng) => {
        // Create a Leaflet map and set its initial view to the location you want to display
        var map = L.map('mapid',
                        {scrollWheelZoom:false,
                         zoomDelta: 0.25,
                         zoomSnap: 0})
                  .setView([lat, lng], zoomLevel);

        // Add a tile layer to the map to display the OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 18,
        }).addTo(map);

        // Add a marker for the location you want to display
        var marker = L.marker([lat, lng]).addTo(map);  
    };

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLatitude(data[0].lat);
                setLongitude(data[0].lon);
            })
            .catch(error => console.error(error));
    }, [url]);
    
    useEffect(() => {
        if (latitude && longitude) {
            createMap(latitude, longitude);
        }
    }, [latitude, longitude]);

    return (
        <div id="mapid"></div>
    );
};

export default Map;

