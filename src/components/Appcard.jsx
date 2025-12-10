import React from 'react';
import AppButton from "./Button.jsx"

import { Card, Col, Row } from 'antd';
const AppCard = ({obj}) => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
        <AppButton obj = {obj}    title = {"View All"}/>
    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
        <AppButton obj = {obj}  title = {"View All"}/>

    </Col>
    <Col span={8}>
      <Card title="Card title" variant="borderless">
        Card content
      </Card>
        <AppButton  obj = {obj}  title = {"View All"}/>

    </Col>
  </Row>
);
export default AppCard;