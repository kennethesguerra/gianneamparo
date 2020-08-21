import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Menus from './Menus';

export default function Footer() {
  return (
    <div>
      <Row fluid id="footer">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div id="footer-socmed-icons">
                <Link href="" className="footer-socmed-icon">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </Link>
                <Link href="" className="footer-socmed-icon">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </Link>
                <Link href="" className="footer-socmed-icon">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <div className="small" id="footer-illustrator">
                &copy; 2020 Gianne Amparo
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}


