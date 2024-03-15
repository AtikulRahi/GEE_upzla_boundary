var roi = ee.FeatureCollection("projects/ee-learning-rahi/assets/BGD_adm3");

print(roi.aggregate_array("NAME_3"))
var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
var upzlaA = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S.")).geometry().area()
var upzlaP = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S.")).geometry().perimeter()
print(upzlaA)
print(upzlaP)

Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")
var styleParams = {
  fillColor: 'red',
  color: '00909F',
  width: 1.0,
};
Map.addLayer(upzla.style(styleParams))