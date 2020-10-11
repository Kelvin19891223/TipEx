import React from "react";
import {Col, Row} from "antd";

import timeLineData from "../timeLineData";
import DefaultTimeLineItem from "admin/components/timeline/DefaultTimeLineItem";
import ContainerHeader from "admin/components/ContainerHeader/index";
import IntlMessages from "admin/util/IntlMessages";

const LeftAligned = ({match}) => {
  return (
    <Row>
      <Col span={24}>
        <ContainerHeader title={<IntlMessages id="sidebar.timeLine.leftAligned"/>} match={match}/>
      </Col>
      <Col span={24}>
        <div className="gx-timeline-section">
          {timeLineData.map((timeLine, index) => <DefaultTimeLineItem key={index} timeLine={timeLine}/>)}
        </div>
      </Col>
    </Row>
  )
};

export default LeftAligned;

