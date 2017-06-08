<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor
         version="1.0.0"
         xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
         xmlns="http://www.opengis.net/sld"
         xmlns:ogc="http://www.opengis.net/ogc"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>prad__poly_wgs84</Name>
    <UserStyle>
      <Name>prad__poly_wgs84</Name>
      <FeatureTypeStyle>
        <Rule>
          <Name>Single symbol</Name>
          <MaxScaleDenominator>3000</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#d6cd68</CssParameter>
              <CssParameter name="fill-opacity">0</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#0067c5</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <!-- <CssParameter name="stroke-linejoin">bevel</CssParameter> -->
            </Stroke>
          </PolygonSymbolizer>
          <TextSymbolizer>
            <Geometry>
              <ogc:Function name="centroid">
                <ogc:PropertyName>geom</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Label>
              <ogc:PropertyName>lot_number</ogc:PropertyName>
            </Label>

            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">11</CssParameter>
              <CssParameter name="font-style">normal</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>

            <Fill>
              <CssParameter name="fill">#0067c5</CssParameter>
            </Fill>
            <VendorOption name="autoWrap">60</VendorOption>
            <VendorOption name="maxDisplacement">150</VendorOption>
          </TextSymbolizer>
        </Rule>
        <Rule>
          <Name>Single symbol</Name>
          <MinScaleDenominator>3000</MinScaleDenominator>
          <MaxScaleDenominator>10000</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#d6cd68</CssParameter>
              <CssParameter name="fill-opacity">0</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#0067c5</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <!-- <CssParameter name="stroke-linejoin">bevel</CssParameter> -->
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
