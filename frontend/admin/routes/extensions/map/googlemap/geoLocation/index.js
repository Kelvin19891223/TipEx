import React from "react";
import {Card} from "antd";

import GeolocationExample from "./Components/GeoLocation";
import IntlMessages from "admin/util/IntlMessages";


const GeoLocation = () => {
  return (
    <Card className="gx-card" title={<IntlMessages id="sidebar.map.geoLocation"/>}>
      <GeolocationExample/>
    </Card>
  );
};

export default GeoLocation;
