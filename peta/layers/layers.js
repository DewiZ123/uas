var wms_layers = [];
var format_JKasus_0 = new ol.format.GeoJSON();
var features_JKasus_0 = format_JKasus_0.readFeatures(json_JKasus_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JKasus_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JKasus_0.addFeatures(features_JKasus_0);var lyr_JKasus_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JKasus_0, 
                style: style_JKasus_0,
    title: 'JKasus<br />\
    <img src="styles/legend/JKasus_0_0.png" />  2143.0000 - 2882.1667 <br />\
    <img src="styles/legend/JKasus_0_1.png" />  2882.1667 - 3621.3333 <br />\
    <img src="styles/legend/JKasus_0_2.png" />  3621.3333 - 4360.5000 <br />\
    <img src="styles/legend/JKasus_0_3.png" />  4360.5000 - 5099.6667 <br />\
    <img src="styles/legend/JKasus_0_4.png" />  5099.6667 - 5838.8333 <br />\
    <img src="styles/legend/JKasus_0_5.png" />  5838.8333 - 6578.0000 <br />'
        });var format_JTes_1 = new ol.format.GeoJSON();
var features_JTes_1 = format_JTes_1.readFeatures(json_JTes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JTes_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JTes_1.addFeatures(features_JTes_1);var lyr_JTes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JTes_1, 
                style: style_JTes_1,
    title: 'JTes<br />\
    <img src="styles/legend/JTes_1_0.png" />  2143.0000 - 2882.1667 <br />\
    <img src="styles/legend/JTes_1_1.png" />  2882.1667 - 3621.3333 <br />\
    <img src="styles/legend/JTes_1_2.png" />  3621.3333 - 4360.5000 <br />\
    <img src="styles/legend/JTes_1_3.png" />  4360.5000 - 5099.6667 <br />\
    <img src="styles/legend/JTes_1_4.png" />  5099.6667 - 5838.8333 <br />\
    <img src="styles/legend/JTes_1_5.png" />  5838.8333 - 6578.0000 <br />'
        });

lyr_JKasus_0.setVisible(true);lyr_JTes_1.setVisible(true);
var layersList = [lyr_JKasus_0,lyr_JTes_1];
lyr_JKasus_0.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'kode': 'kode', 'Provinsi': 'Provinsi', 'JTes HIV': 'JTes HIV', 'JKasus HIV': 'JKasus HIV', });
lyr_JTes_1.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'kode': 'kode', 'Provinsi': 'Provinsi', 'JTes HIV': 'JTes HIV', 'JKasus HIV': 'JKasus HIV', });
lyr_JKasus_0.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'kode': 'TextEdit', 'Provinsi': 'TextEdit', 'JTes HIV': 'TextEdit', 'JKasus HIV': 'TextEdit', });
lyr_JTes_1.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'kode': 'TextEdit', 'Provinsi': 'TextEdit', 'JTes HIV': 'TextEdit', 'JKasus HIV': 'TextEdit', });
lyr_JKasus_0.set('fieldLabels', {'ID': 'header label', 'Kabupaten_': 'header label', 'kode': 'header label', 'Provinsi': 'header label', 'JTes HIV': 'no label', 'JKasus HIV': 'header label', });
lyr_JTes_1.set('fieldLabels', {'ID': 'header label', 'Kabupaten_': 'header label', 'kode': 'header label', 'Provinsi': 'header label', 'JTes HIV': 'header label', 'JKasus HIV': 'no label', });
lyr_JTes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});