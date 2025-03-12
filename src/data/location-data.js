
const data = [
  { location: "London", latitude: 51.5073219, longitude: -0.1276474 },
  { location: "Kolkata", latitude: 22.5726723, longitude: 88.3638815 },
  { location: "Dhaka", latitude: 23.777176, longitude: 90.399452 },
  { location: "Singapore", latitude: 1.2899175, longitude: 103.8519072 },
  { location: "New York", latitude: 40.7127281, longitude: -74.0060152 },
  { location: "Toronto", latitude: 43.6534817, longitude: -79.3839347 },
  { location: "Los Angeles", latitude: 34.052235, longitude: -118.243683 },
  { location: "Chicago", latitude: 41.878113, longitude: -87.629799 },
  { location: "San Francisco", latitude: 37.774929, longitude: -122.419418 },
  { location: "Mumbai", latitude: 19.07609, longitude: 72.877426 },
  { location: "Bangkok", latitude: 13.756331, longitude: 100.501762 },
  { location: "Berlin", latitude: 52.520008, longitude: 13.404954 },
  { location: "Paris", latitude: 48.856613, longitude: 2.352222 },
  { location: "Tokyo", latitude: 35.682839, longitude: 139.759455 },
  { location: "Sydney", latitude: -33.86882, longitude: 151.20929 },
  { location: "Rio de Janeiro", latitude: -22.906847, longitude: -43.172897 },
  { location: "Cape Town", latitude: -33.92487, longitude: 18.424055 },
  { location: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { location: "Hong Kong", latitude: 22.3193039, longitude: 114.1693611 },
  { location: "Seoul", latitude: 37.566536, longitude: 126.977966 },
  { location: "Moscow", latitude: 55.755825, longitude: 37.617298 },
  { location: "Istanbul", latitude: 41.00824, longitude: 28.978359 },
  { location: "Mexico City", latitude: 19.432608, longitude: -99.133209 },
  { location: "Cairo", latitude: 30.04442, longitude: 31.235712 },
  { location: "Buenos Aires", latitude: -34.603684, longitude: -58.381559 },
  { location: "Rome", latitude: 41.902782, longitude: 12.496366 },
  { location: "Madrid", latitude: 40.416775, longitude: -3.70379 },
  { location: "Vienna", latitude: 48.208176, longitude: 16.373819 },
  { location: "Amsterdam", latitude: 52.367573, longitude: 4.904139 },
  { location: "Jakarta", latitude: -6.208763, longitude: 106.845599 },
  { location: "Lagos", latitude: 6.524379, longitude: 3.379206 },
  { location: "Kuala Lumpur", latitude: 3.139003, longitude: 101.686855 },
  { location: "Delhi", latitude: 28.613939, longitude: 77.209023 },
  { location: "Lima", latitude: -12.046374, longitude: -77.042793 },
  { location: "Hanoi", latitude: 21.028511, longitude: 105.804817 },
  { location: "Sao Paulo", latitude: -23.55052, longitude: -46.633308 },
  { location: "Beijing", latitude: 39.904202, longitude: 116.407394 },
  { location: "Oslo", latitude: 59.913869, longitude: 10.752245 },
  { location: "Stockholm", latitude: 59.329323, longitude: 18.068581 },
  { location: "Copenhagen", latitude: 55.676098, longitude: 12.568337 },
  { location: "Helsinki", latitude: 60.16952, longitude: 24.93545 },
  { location: "Athens", latitude: 37.98381, longitude: 23.727539 },
  { location: "Prague", latitude: 50.075538, longitude: 14.4378 },
  { location: "Warsaw", latitude: 52.229676, longitude: 21.012229 },
  { location: "Brussels", latitude: 50.85034, longitude: 4.35171 },
  { location: "Zürich", latitude: 47.376886, longitude: 8.541694 },
  { location: "Lisbon", latitude: 38.71689, longitude: -9.1399 },
  { location: "Dublin", latitude: 53.349805, longitude: -6.26031 },
  { location: "Edinburgh", latitude: 55.953251, longitude: -3.188267 },
  { location: "Venice", latitude: 45.440847, longitude: 12.315515 },
  { location: "Naples", latitude: 40.851775, longitude: 14.268124 },
  { location: "Bangalore", latitude: 12.971599, longitude: 77.594566 },
  { location: "Chennai", latitude: 13.08268, longitude: 80.270718 },
  { location: "Hyderabad", latitude: 17.385044, longitude: 78.486671 },
  { location: "Pune", latitude: 18.52043, longitude: 73.856744 },
  { location: "Ahmedabad", latitude: 23.022505, longitude: 72.571365 },
  { location: "Surat", latitude: 21.17024, longitude: 72.831061 },
  { location: "Jaipur", latitude: 26.912434, longitude: 75.787271 },
  { location: "Lucknow", latitude: 26.846693, longitude: 80.946166 },
  { location: "Kanpur", latitude: 26.449923, longitude: 80.331874 },
  { location: "Nagpur", latitude: 21.1458, longitude: 79.088155 },
  { location: "Indore", latitude: 22.719568, longitude: 75.857727 },
  { location: "Patna", latitude: 25.594095, longitude: 85.137566 },
  { location: "Bhopal", latitude: 23.259933, longitude: 77.412615 },
  { location: "Ludhiana", latitude: 30.900965, longitude: 75.857275 },
  { location: "Agra", latitude: 27.17667, longitude: 78.008075 },
  { location: "Varanasi", latitude: 25.317645, longitude: 82.973914 },
  { location: "Thiruvananthapuram", latitude: 8.524139, longitude: 76.936638 },
  { location: "Coimbatore", latitude: 11.016844, longitude: 76.955832 },
  { location: "Kochi", latitude: 9.931233, longitude: 76.267304 },
  { location: "Visakhapatnam", latitude: 17.686816, longitude: 83.218482 },
  { location: "Madurai", latitude: 9.925201, longitude: 78.119775 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const filtered = data.filter((f) => f.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
