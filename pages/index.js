import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Row, Col, Tag } from 'antd';
import PriceTags from './priceTags';

export default function Home() {
  return (
    <React.Fragment>
      <Row style={{ paddingTop: '24px' }}>
        <Col span={24}>
          <img
            src='/assets/Pruksa-Thai-Massage-LOGO.png'
            style={{ height: '200px' }}
          ></img>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <h1>Pruksa Thai Massage</h1>
          <h2>Tel. 07366256886 | Email: pruksathaimassage@gmail.com</h2>
        </Col>
      </Row>
      <Row className={styles.welcomeMessageRow}>
        <Col span={20} offset={2}>
          <div className={styles.welcomeMessageContainer}>
            <p>
              Welcome to Pruksa traditional Thai massage. Based in central
              Teddington, we offer traditional Thai massage, Thai combination
              massage, deep tissue massage, relaxing massage.{' '}
            </p>
            <p>
              Whether you are looking for strong, deep massage or classic style
              relaxation massage we are happy to provide you with the level of
              massage that with consulting with you to ensure the best and most
              enjoyable experience.{' '}
            </p>
            <p>
              We are happy to see male and female clients and reduce the stress
              of everyday life with a relaxing massage, or deal with knots and
              muscle issues.
            </p>
          </div>
        </Col>
      </Row>

      <PriceTags />

      <Row>
        <Col span={20} offset={2}>
          <h1 style={{ marginBottom: '-10px' }}>Annoucements</h1>
          <hr />
          <p>
            Please do not hesitate to phone to discuss your requirements and
            make an advanced booking. Parking is available near by. Due to the
            current COVID situation we are slowly coming back to treatments and
            so currently only available Monday, Tuesday and Friday from 1pm to
            9pm.
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2}>
          <h1 style={{ marginBottom: '-10px' }}>Find us</h1>
          <hr />
          <p>
            Orange Tree clinic 23A, Broad Street, Teddington, TW11 8QZ (1st
            Floor)
          </p>
        </Col>
        <Col span={24}>
          <iframe
            style={{ width: '100%', border: 0, height: '450px', tabIndex: 0 }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.7413225195514!2d-0.3410181839034623!3d51.4261782796219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b7c969c25db%3A0x6b16e9ed77237e68!2sOrange%20Tree%20Clinic!5e0!3m2!1sen!2sth!4v1603210939725!5m2!1sen!2sth'
          ></iframe>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2}>
          <br></br>
        </Col>
      </Row>
    </React.Fragment>
  );
}
