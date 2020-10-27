import React from 'react';
import { Row, Col, Tag } from 'antd';
import styles from '../styles/Home.module.css';

const PriceTags = () => {
  return (
    <Row className={styles.priceRow}>
      <Col sm={24} md={{ span: 16, offset: 4 }} className={styles.serviceCol}>
        <Row gutter={[0, 16]}>
          <Col xs={24} sm={24} md={24} lg={16} style={{padding: '24px'}}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'left',
              }}
            >
              <h4 style={{ marginBottom: -8 }}>
                RESERVING YOUR HEAVEN THAI MASSAGE
              </h4>
              <h1>OUR WIDE RAGE OF SERVICES</h1>

              <Row gutter={[0, 24]}>
                <Col span={8}>
                  <Tag color='magenta' className={styles.tag}>
                    <div className={styles.tagText}>30 mins</div>
                  </Tag>
                </Col>
                <Col span={16} className={styles.priceCol}>
                  <Tag color='magenta' className={styles.tag}>
                    <div className={styles.tagText}>£30</div>
                  </Tag>
                </Col>
              </Row>
              <Row gutter={[0, 24]}>
                <Col span={8}>
                  <Tag color='volcano' className={styles.tag}>
                    <div className={styles.tagText}>60 mins</div>
                  </Tag>
                </Col>
                <Col span={16} className={styles.priceCol}>
                  <Tag color='volcano' className={styles.tag}>
                    <div className={styles.tagText}>£50</div>
                  </Tag>
                </Col>
              </Row>
              <Row gutter={[0, 24]}>
                <Col span={12}>
                  <Tag color='gold' className={styles.tag}>
                    <div className={styles.tagText}>90 mins</div>
                  </Tag>
                </Col>
                <Col span={12} className={styles.priceCol}>
                  <Tag color='gold' className={styles.tag}>
                    <div className={styles.tagText}>£75</div>
                  </Tag>
                </Col>
              </Row>
              <Row gutter={[0, 24]}>
                <Col span={8}>
                  <Tag color='green' className={styles.tag}>
                    <div className={styles.tagText}>120 mins</div>
                  </Tag>
                </Col>
                <Col span={16} className={styles.priceCol}>
                  <Tag color='green' className={styles.tag}>
                    <div className={styles.tagText}>£90</div>
                  </Tag>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8}>
            <img
              src='/assets/service-deco.png'
              className={styles.imgDeco}
            ></img>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default PriceTags;
