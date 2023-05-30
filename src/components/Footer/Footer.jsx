import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logoyeni.jpg";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Yeşil Gurme</h5>
              <p>
              Doğanın mucizesi sofranızda hayat bulur.
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">TESLİMAT</h5>
            <ListGroup className="delivery__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Ücretsiz Kargo</span>
                <p>250 TL ve üzeri alışverişlerinizde ücretsiz kargo fırsatından yararlanabilirsiniz.</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Kargoda Kırılmaz</span>
                <p>Özel paketleme malzemeleri ile hazırlanır, her türlü kırılmaya karşı garantilidir.</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">İLETİŞİM</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Lokasyon: Edremit, Balıkesir</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Telefon: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: yesilgurme@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">BÜLTEN</h5>
            <p>Bizi Takip Edin</p>
            <div className="newsletter">
              <input type="email" placeholder="E-posta adresinizi giriniz." />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2023, yesilgurme.com-Tüm Hakları Saklıdır.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Sosyal Medya Hesaplarımız: </p>
              <span>
                {" "}
                <Link to="">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/HaticeOgur">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="https://youtu.be/2p4JZZ6tjk4 ">
                  <i class="ri-youtube-line"></i>
                </Link>{""}
              </span>

              <span>
                {" "}
                <Link to="https://www.linkedin.com/in/hatice-ogur/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;