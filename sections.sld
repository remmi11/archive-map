<?xml version="1.0" encoding="ISO-8859-1"?>
<StyledLayerDescriptor
  version="1.0.0"
  xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.0.0/StyledLayerDescriptor.xsd"
  xmlns="http://www.opengis.net/sld"
  xmlns:ogc="http://www.opengis.net/ogc"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

  <NamedLayer>
    <Name>Secs</Name>
    <UserStyle>
      <Title>Texas Secs</Title>
      <FeatureTypeStyle>

        <!-- Rule 1 -->
        <Rule>
          <Title>Texas Sec Labels</Title>
          <MaxScaleDenominator>30000</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ffff00</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
          <TextSymbolizer>
            <Geometry>
              <ogc:Function name="centroid">
                <ogc:PropertyName>geom</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Label>Sec <ogc:PropertyName>l3surnum</ogc:PropertyName><![CDATA[
]]>Blk <ogc:PropertyName>l2block</ogc:PropertyName><![CDATA[
]]><ogc:PropertyName>l1surnam</ogc:PropertyName></Label>

            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">24</CssParameter>
              <CssParameter name="font-style">normal</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0</AnchorPointX>
                  <AnchorPointY>0</AnchorPointY>
                </AnchorPoint>
                <Displacement>
                  <DisplacementX>3</DisplacementX>
                  <DisplacementY>3</DisplacementY>
                </Displacement>
                <Rotation>0</Rotation>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
              <Radius>
                <ogc:Literal>2</ogc:Literal>
              </Radius>
              <Fill>
                <CssParameter name="fill">#00000</CssParameter>
              </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#ffff00</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>


        <!-- Rule 2 -->
        <Rule>
          <Title>Texas Sec Labels</Title>
          <MinScaleDenominator>30000</MinScaleDenominator>
          <MaxScaleDenominator>100000</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ffff00</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
          <TextSymbolizer>
            <Geometry>
              <ogc:Function name="centroid">
                <ogc:PropertyName>geom</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Label>Sec <ogc:PropertyName>l3surnum</ogc:PropertyName><![CDATA[
]]>Blk <ogc:PropertyName>l2block</ogc:PropertyName><![CDATA[
]]><ogc:PropertyName>l1surnam</ogc:PropertyName></Label>

            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">12</CssParameter>
              <CssParameter name="font-style">normal</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0</AnchorPointX>
                  <AnchorPointY>0</AnchorPointY>
                </AnchorPoint>
                <Displacement>
                  <DisplacementX>5</DisplacementX>
                  <DisplacementY>5</DisplacementY>
                </Displacement>
                <Rotation>0</Rotation>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
              <Radius>
                <ogc:Literal>1.5</ogc:Literal>
              </Radius>
              <Fill>
                <CssParameter name="fill">#00000</CssParameter>
              </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#ffff00</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>

        <!-- Rule 3 -->
        <Rule>
          <Title>Texas Sec Labels</Title>
          <MinScaleDenominator>100000</MinScaleDenominator>
          <MaxScaleDenominator>200000</MaxScaleDenominator>
          <PolygonSymbolizer>
            <Stroke>
              <CssParameter name="stroke">#ffff00</CssParameter>
              <CssParameter name="stroke-width">0.5</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
          <TextSymbolizer>
            <Geometry>
              <ogc:Function name="centroid">
                <ogc:PropertyName>geom</ogc:PropertyName>
              </ogc:Function>
            </Geometry>
            <Label>Sec <ogc:PropertyName>l3surnum</ogc:PropertyName><![CDATA[
]]>Blk <ogc:PropertyName>l2block</ogc:PropertyName><![CDATA[
]]><ogc:PropertyName>l1surnam</ogc:PropertyName></Label>

            <Font>
              <CssParameter name="font-family">Arial</CssParameter>
              <CssParameter name="font-size">0</CssParameter>
              <CssParameter name="font-style">normal</CssParameter>
              <CssParameter name="font-weight">bold</CssParameter>
            </Font>
            <LabelPlacement>
              <PointPlacement>
                <AnchorPoint>
                  <AnchorPointX>0</AnchorPointX>
                  <AnchorPointY>0</AnchorPointY>
                </AnchorPoint>
                <Displacement>
                  <DisplacementX>5</DisplacementX>
                  <DisplacementY>5</DisplacementY>
                </Displacement>
                <Rotation>0</Rotation>
              </PointPlacement>
            </LabelPlacement>
            <Halo>
              <Radius>
                <ogc:Literal>2</ogc:Literal>
              </Radius>
              <Fill>
                <CssParameter name="fill">#00000</CssParameter>
              </Fill>
            </Halo>
            <Fill>
              <CssParameter name="fill">#ffff00</CssParameter>
            </Fill>
          </TextSymbolizer>
        </Rule>


      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>
