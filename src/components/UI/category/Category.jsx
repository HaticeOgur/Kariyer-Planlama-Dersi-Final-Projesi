import React from 'react'
import {Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/category1.png";
import categoryImg02 from "../../../assets/images/category2.png";
import categoryImg03 from "../../../assets/images/category3.png";
import categoryImg04 from "../../../assets/images/category4.png";

import '../../../styles/category.css';

const categoryData = [
    {
      display: "Kahvaltılık",
      imgUrl: categoryImg01,
    },
    {
      display: "Tatlılar",
      imgUrl: categoryImg02,
    },
  
    {
      display: "Meyve ve Sebze",
      imgUrl: categoryImg03,
    },
  
    {
      display: "Zeytinyağı",
      imgUrl: categoryImg04,
    },
  ];

  const Category = () => {
    return (
      <Container>
        <Row>
          {categoryData.map((item, index) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
              <div className="category__item d-flex align-items-center gap-3">
                <div className="category__img">
                  <img src={item.imgUrl} alt="category__item" />
                </div>
                <h6>{item.display}</h6>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Category;