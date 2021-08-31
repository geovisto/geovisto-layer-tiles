# Geovisto Tiles Layer Tool
Extension of the [Geovisto core library](https://github.com/geovisto/geovisto) which provides the tile layer.

This repository is a snapshot of Geoviosto ``tools/layers/tiles`` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

![sample](https://user-images.githubusercontent.com/1479229/131514620-5f4ec88c-ee77-4ce1-976e-6fd37fde6ad0.png)

## Usage

```js
import { GeovistoTilesLayerTool } from 'geovisto-layer-tiles';

// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoTilesLayerTool.createTool({
        id: "geovisto-tool-layer-tiles",
        // instance of IMapTilesModel of the Geovisto core
        baseMap?: {
          // see Leaflet providers
          url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          maxZoom: 20,
          maxNativeZoom: 19
      };
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings 
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    {
      "type": "geovisto-tool-layer-tiles",
      "id": "geovisto-tool-layer-tiles",
      "enabled": true,
    },
  ]
}));
```

## Installation

```
npm install --save geovisto-layer-tiles
```

Peer dependencies:
```
npm install --save geovisto leaflet
```

This package serves as an extension of Geovisto core using the API for Geovisto tools (extensions). Follow Geovisto core on [Github](https://github.com/geovisto/geovisto).

## License

[MIT](https://github.com/geovisto/geovisto-layer-tiles/blob/master/LICENSE)

Note that the tool allows to refer URL of [tile layer providers](https://github.com/leaflet-extras/leaflet-providers) ([examples](http://leaflet-extras.github.io/leaflet-providers/preview/index.html)). Make sure you use them with respect to license of the tiles providers.
