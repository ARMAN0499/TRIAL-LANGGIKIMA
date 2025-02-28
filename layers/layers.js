var wms_layers = [];


        var lyr_BingSatellite_0 = new ol.layer.Tile({
            'title': 'Bing Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=0&dir=dir_n''
            })
        });
var lyr_SPRLamsudahgeoreferensi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "SPR Lam sudah georeferensi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SPRLamsudahgeoreferensi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13611994.429278, -368702.402652, 13613184.228295, -366992.169265]
                            })
                        });
var format_GeodataSPR_2 = new ol.format.GeoJSON();
var features_GeodataSPR_2 = format_GeodataSPR_2.readFeatures(json_GeodataSPR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeodataSPR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeodataSPR_2.addFeatures(features_GeodataSPR_2);
var lyr_GeodataSPR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeodataSPR_2, 
                style: style_GeodataSPR_2,
                popuplayertitle: "Geodata SPR",
                interactive: true,
                title: '<img src="styles/legend/GeodataSPR_2.png" /> Geodata SPR'
            });
var group_Rastersudahgeoreferensi = new ol.layer.Group({
                                layers: [lyr_SPRLamsudahgeoreferensi_1,lyr_GeodataSPR_2,],
                                fold: "open",
                                title: "Raster sudah georeferensi"});

lyr_BingSatellite_0.setVisible(true);lyr_SPRLamsudahgeoreferensi_1.setVisible(true);lyr_GeodataSPR_2.setVisible(true);
var layersList = [lyr_BingSatellite_0,group_Rastersudahgeoreferensi];
lyr_GeodataSPR_2.set('fieldAliases', {'fid': 'fid', });
lyr_GeodataSPR_2.set('fieldImages', {'fid': '', });
lyr_GeodataSPR_2.set('fieldLabels', {'fid': 'no label', });
lyr_GeodataSPR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});