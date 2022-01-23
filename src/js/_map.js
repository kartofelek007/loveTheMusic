const position = [20.99995, 52.23277];
const token = "pk.eyJ1Ijoia2FydG9mZWxlazAwNyIsImEiOiJja2VteHNxbTQxMmlwMnNrN3Uycjd6YzVsIn0.PbT6WOIQhyeB40M2m8ClBw";
const styleUrl = "mapbox://styles/kartofelek007/cjlhvpfs60x942sqthhym92ln";

function map() {
	mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
        container: 'mainMap',
        style: styleUrl,
        zoom:13.7,
        center: position
    });

    map.on("load", function () {
      map.loadImage("images/marker.png", function(error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);
          map.addLayer({
            id: "markers",
            type: "symbol",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features:[{"type":"Feature","geometry":{"type":"Point","coordinates":position}}]}
            },
            layout: {
              "icon-image": "custom-marker",
            }
          });
        });
    });
}

export { map }