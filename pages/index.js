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
        <Col span={24} style={{padding: '8px'}}>
          <h1>Welcome to Pruksa traditional Thai massage in Teddington</h1>
          <h2>
            Tel. <a href='tel:+07366256886'>07366256886</a> | Email:
            <a href='mailto:pruksathaimassage@gmail.com'>
              pruksathaimassage@gmail.com
            </a>
          </h2>
        </Col>
      </Row>
      <Row className={styles.welcomeMessageRow}>
        <Col span={20} offset={2}>
          <div className={styles.welcomeMessageContainer}>
            <p>
              We specialise in authentic Thai massage by genuine Thai
              therapists. We offer a traditional Thai massage including Deep
              Tissue, Relaxing therapy, knots and muscles.
            </p>
            <p>
              We are based in Broad Street in the heart of Teddington, 5 mins
              walk from the Teddington train station, close to Twickenham,
              Hampton and Kingston.
            </p>
            <p>
              We are happy to see both male and female clients, and our aim is
              to reduce the stress of our clients’ everyday life.
            </p>
          </div>
        </Col>
      </Row>

      <PriceTags />

      <Row>
        <Col span={20} offset={2}>
          <h1 style={{ marginBottom: '-10px' }}>Bookings</h1>
          <hr />
          <p>
            Please do not hesitate to phone to discuss your requirements and
            make an advanced booking. Parking is available near by. Due to the
            current COVID situation we are slowly coming back to treatments and
            are currently only available on Monday to Friday 10.30-20.00
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={20} offset={2}>
          <h1 style={{ marginBottom: '-10px' }}>Find us</h1>
          <hr />
          <p>23A, Broad Street, Teddington, TW11 8QZ (1st Floor)</p>
        </Col>
        <Col span={24}>
          <iframe
            style={{ width: '100%', border: 0, height: '450px', tabIndex: 0 }}
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.7388944329728!2d-0.34098418393392177!3d51.42622287962182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b895a05cdc5%3A0xd846012ce70255c6!2sPruksa%20Thai%20Massage!5e0!3m2!1sen!2sth!4v1603997886454!5m2!1sen!2sth'
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
