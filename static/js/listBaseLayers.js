var hybridMap = new L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNpdGFicWJqYjAwdzUydHM2M2g0MmhsYXAifQ.oO-MYNUC2tVeXa1xYbCIyw", {
    attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>© Mapbox</a><a href='https://openstreetmap.org/about/' target='_blank'>© OpenStreetMap</a><a href='https://www.mapbox.com/feedback/#/-74.5/40/10' target='_blank'&nbspImprove this map",
    maxZoom:18
});

// var streetsLayer = new L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNpdGFicWJqYjAwdzUydHM2M2g0MmhsYXAifQ.oO-MYNUC2tVeXa1xYbCIyw", {
//     attribution: "&copy <a href='https://www.mapbox.com/about/maps'>Mapbox</a> &copy <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>&nbsp<a href='https://www.mapbox.com/map-feedback/'>| Improve this map</a> ",
//     maxZoom: 21
// });

var topoLayer = new L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNpdGFicWJqYjAwdzUydHM2M2g0MmhsYXAifQ.oO-MYNUC2tVeXa1xYbCIyw", {
    attribution: "<a href='https://www.mapbox.com/about/maps/' target='_blank'>© Mapbox</a><a href='https://openstreetmap.org/about/' target='_blank'>© OpenStreetMap</a><a href='https://www.mapbox.com/feedback/#/-74.5/40/10' target='_blank'&nbspImprove this map",
    maxZoom: 18
});

// //Define layers
// var LISTTopographic = new L.tileLayer("https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Topographic/ImageServer/tile/{z}/{y}/{x}", {
//     attribution: "Topographic Basemap from <a href=http://www.thelist.tas.gov.au>the LIST</a> &copy State of Tasmania",
//     maxZoom: 20,
//     maxNativeZoom: 18
// });

// var LISTAerial = new L.tileLayer("https://services.thelist.tas.gov.au/arcgis/rest/services/Basemaps/Orthophoto/ImageServer/tile/{z}/{y}/{x}", {
//     attribution: "Base Imagery from <a href=http://www.thelist.tas.gov.au>the LIST</a> &copy State of Tasmania",
//     maxZoom: 20,
//     maxNativeZoom: 19
// });