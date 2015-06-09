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