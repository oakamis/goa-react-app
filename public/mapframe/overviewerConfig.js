var overviewerConfig = {
  CONST: {
    tileSize: 384,
    image: {
      defaultMarker: "signpost.png",
      signMarker: "signpost_icon.png",
      bedMarker: "bed.png",
      spawnMarker: "markers/marker_home.png",
      spawnMarker2x: "markers/marker_home_2x.png",
      queryMarker: "markers/marker_location.png",
      queryMarker2x: "markers/marker_location_2x.png",
      compass: {
        0: "compass_upper-left.png",
        1: "compass_upper-right.png",
        3: "compass_lower-left.png",
        2: "compass_lower-right.png",
      },
    },
    mapDivId: "mcmap",
    UPPERLEFT: 0,
    UPPERRIGHT: 1,
    LOWERLEFT: 3,
    LOWERRIGHT: 2,
  },
  worlds: ["Adelia"],
  map: {
    debug: false,
    cacheTag: "1648101911",
    north_direction: "lower-left",
    controls: {
      pan: true,
      zoom: true,
      spawn: true,
      compass: true,
      mapType: true,
      overlays: true,
      coordsBox: true,
    },
  },
  tilesets: [
    {
      name: "Guardians of Adelia",
      zoomLevels: 9,
      defaultZoom: 5,
      maxZoom: 9,
      path: "adelia",
      base: "https://raw.githubusercontent.com/Lix3nn53/goa-overviewer/master/remote/",
      bgcolor: "#1a1a1a",
      world: "Adelia",
      last_rendertime: 1647970276,
      imgextension: "webp",
      isOverlay: false,
      poititle: "Markers",
      showlocationmarker: true,
      center: [2065, 130, 1311],
      minZoom: 0,
      spawn: false,
      north_direction: 0,
    },
  ],
};