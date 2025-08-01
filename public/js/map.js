mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
    zoom: 8,
    center:coordinates,
});

const marker=new mapboxgl.Marker({color:"red"})
.setLngLat(coordinates)
.addTo(map);