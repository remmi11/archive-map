var center = new L.LatLng(35.174930849, -101.83296203);
var map = new L.Map('map', {
    center: center,
    zoom: 12,
    maxZoom: 18,
    //maxNativeZoom:21,
    zoomControl: false,
    detectRetina: true
});

var baselayers = {
    "Hybrid": hybridMap,
    "Streets": topoLayer

};
map.addLayer(topoLayer)

var rootURL = 'http://localhost:8080/';

var overlays = {
    "Apex": 'database:apex_pts',
    "Furman": "database:furman_pts",
    "Canadian": 'database:canadian_pts',
    "Sections": 'database:otls14',
    "Parcels": 'database:prad__poly_wgs84'
    // "Floods": 'database:flood'
};

var lOverlays = {};

//Set up trigger functions for adding layers to interactivity.
map.on('overlayadd', function(e) {
  updateInteractiveLayers(e.layer.options.layers);
});
map.on('overlayremove', function(e) {
  updateInteractiveLayers(e.layer.options.layers);
});

var intLayers = [];
var intLayersString = "";


for (layer in overlays) {

    var newLayer = new L.TileLayer.WMS(rootURL + "geoserver/database/wms", {
        layers: overlays[layer],
        format: 'image/png',
        transparent: true
    });

    // if(!(layer == 'Sections' || layer ==  'Parcels')) {}
    // ADD OVERLAYS TO CONTROL
    lOverlays[layer] = newLayer;

    map.addLayer(newLayer);
    updateInteractiveLayers(overlays[layer]);

};

function updateInteractiveLayers(layer) {
    if(!(layer =="database:otls14" || layer == 'database:prad__poly_wgs84')) {
        var index = $.inArray(layer, intLayers);
        if(index > -1) {
            intLayers.splice(index,1);
        } else {
            intLayers.push(layer);
        }
        intLayersString = intLayers.join();
    }
};


function handleJson(data) {
    selectedFeature = L.geoJson(data, {
        style: function (feature) {
            return {
                color: 'yellow'
            };
        },
        onEachFeature: function (feature, layer) {

            delete feature.properties.bbox;

            content = (
                
                "<div class='custom-title'>" + feature.properties.JobNumber + "</div>"
                + "<strong>Address: </strong>" + feature.properties.PropertyAddress + "<br>"
                + "<strong>Description: </strong>" + feature.properties.JobDescription + "<br>"
                + "<strong>Surveyor: </strong>" + feature.properties.Surveyor + "<br>"
                + "<strong>Certify To: </strong>" + feature.properties.CertifyTo + "<br>"
                + "<hr>"
                + "<strong>Subdivision: </strong>" + feature.properties.Subdivision + "<br>"
                + "<strong>Unit: </strong>" + feature.properties.Unit + "<br>"
                + "<strong>Block: </strong>" + feature.properties.BlockSubdivision + "<br>"
                + "<strong>Lot: </strong>" + feature.properties.LotSubdivision + "<br>"
                + "<strong>Date: </strong>" + feature.properties.JobDate + "<br><br>"
                + "<hr>"
                + "<strong>County: </strong>" + feature.properties.county + "<br>"
                + "<strong>Survey: </strong>" + feature.properties.OLTSSurvey + "<br>"
                + "<strong>Bloxk: </strong>" + feature.properties.OLTSBlock + "<br>"
                + "<strong>Section: </strong>" + feature.properties.OLTSSection + "<br>"
                 + "<hr>"
                + "<strong>County: </strong>" + feature.properties.county + "<br>"
                + "<strong>Township/Range: </strong>" + feature.properties.TownshipRange + "<br>"
                + "<strong>Section: </strong>" + feature.properties.Section + "<br>"
            );


            // };

            //testing...
            // encodedURL = feature.properties.FolderURL
            // folderLink = "<strong>Folder: </strong><a href=" + encodedURL + ">Job Files</a>"
            // console.log(feature.properties.FolderURL)
            encodedURL = feature.properties.FolderURL.replace(/ /g, "%20");
            folderLink = "<strong>Folder: </strong><a href=" + encodedURL + ">Job Files</a>"

            content = content + folderLink;
            var popup = L.popup()
                .setLatLng(queryCoordinates)
                .setContent(content)
                .openOn(map);
            layer.bindPopup(content);
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight
            });
        },
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: 5,
                fillColor: "yellow",
                color: "#000",
                weight: 5,
                opacity: 0.6,
                fillOpacity: 0.2
            });
        }
    });
    selectedFeature.addTo(map);
}

//Query layer functionality.
var selectedFeature;
var queryCoordinates;
// var src = new Proj4js.Proj('EPSG:4326');
// var dst = new Proj4js.Proj('EPSG:26913');


map.on('click', function (e) {
    if (selectedFeature) {
        map.removeLayer(selectedFeature);
    };

    var owsrootUrl = rootURL + 'geoserver/ows';

    // var p = new Proj4js.Point(e.latlng.lng, e.latlng.lat);
    // Proj4js.transform(src, dst, p);
    queryCoordinates = e.latlng;

    var defaultParameters = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: intLayersString,
        maxFeatures: 100,
        outputFormat: 'text/javascript',
        format_options: 'callback:getJson',
        SrsName: 'EPSG:4326',
        resultsType: 'Results',
        bbox: String(e.latlng.lat - .000025) + "," + String(e.latlng.lng - .000025) + "," + String(e.latlng.lat + .000025) + "," + String(e.latlng.lng + .000025)
    };

    var parameters = L.Util.extend(defaultParameters);

    var url = owsrootUrl + L.Util.getParamString(parameters)

    $.ajax({
        url: owsrootUrl + L.Util.getParamString(parameters),
        dataType: 'jsonp',
        jsonpCallback: 'getJson',
        success: handleJson
    });
});

function highlightFeature(e) {
    var layer = e.target;
    layer.setStyle({
        fillColor: "yellow",
        color: "yellow",
        weight: 5,
        opacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera) {
        layer.bringToFront();
    }
}

function resetHighlight(e) {
    var layer = e.target;
    layer.setStyle({
        radius: 5,
        fillColor: "yellow",
        color: "yellow",
        weight: 5,
        opacity: 0.6,
        fillOpacity: 0.2
    });
}


//Zoom control
L.control.zoom().addTo(map);

//Layer control
L.control.layers(baselayers, lOverlays, {
    position: 'topright'
}).addTo(map);

//Search control
L.control.searchControl().addTo(map);

L.control.scale().addTo(map);
