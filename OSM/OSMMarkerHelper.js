/*

  Brief Explaination on to work with OpenLayers3

  Anything displayed using OpenLayers3(ol3) will be mostly likely be either a feature or control.

  We cannot display feature as it is . Every Feature is displayed on layer .
  A layer can have one or any number of features associated with it. A Layer has to be pointed to appropriate 
  source to get these features.
  There are multiple types of features and layers . Feature examples are point , polygon etc. 
  Layer example are Vector , rastor etc

  So summarizing 
  Feature ( Marker here having geometry as a point) -> vector source -> vector layer --> Map 
      

  //There are tons of feature missing , like anchoring image position etc.

*/
CreateMarker=function(long,lat,icon_image){

  var iconFeature = new ol.Feature({
    geometry: new ol.geom.Point(ol.proj.transform([long, lat], 'EPSG:4326',   'EPSG:3857'))
  });

  var iconStyle = new ol.style.Style({
    image: new ol.style.Icon(/** @type {olx.style.IconOptions} */ ({    
      src: icon_image
    }))
  });

  iconFeature.setStyle(iconStyle);


  var vectorSource = new ol.source.Vector({
    features: [iconFeature]
  });

  var vectorLayer = new ol.layer.Vector({
    source: vectorSource
  });

	return vectorLayer
}

var alternatesource=new ol.source.OSM();
//Carefull it is longitude first and then latitude parameters . Also note both are floating values not strings
//Over parameters are the div tag element name , source to be used and the center of the map coordinates
//Openlayers can render a number of sources to provide a custom source please 

Initialize=function(elementid,center_long,center_lat,zoom,source,minZoom,maxZoom)
{ 
  source = typeof source !== 'undefined' ? source : alternatesource;
  center_long = typeof center_long !== 'undefined' ? center_long : 0;
  center_lat = typeof center_latong !== 'undefined' ? center_lat : 0;
  minZoom = typeof minZoom !== 'undefined' ? minZoom : 2;
  maxZoom = typeof maxZoom !== 'undefined' ? maxZoom : 15;
  zoom = typeof zoom !== 'undefined' ? zoom : 5;

    var map = new ol.Map({
    layers: [
        new ol.layer.Tile({
        source: source
        })
    ],
    target: elementid,

    view: new ol.View({
            center: ol.proj.transform([center_long, center_lat], 'EPSG:4326', 'EPSG:3857'),
            zoom: zoom,
            minZoom: minZoom,
            maxZoom: maxZoom
        })
    });

    return map;

}