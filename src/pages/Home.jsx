import React, { useState, useEffect } from "react";
import Helmet from '../components/Helmet/Helmet.js'
import{ Container, Row, Col,ListGroup, ListGroupItem } from "reactstrap";
import giris_img from '../assets/images/giris.jpeg'
import '../styles/giris-section.css';
import {Link} from 'react-router-dom';
import Category from "../components/UI/category/Category.jsx";
import '../styles/home.css';
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import product from '../assets/data/product.js';
import MusteriSlider from "../components/UI/slider/MusteriSlider.jsx";

import featureImg01 from '../assets/images/women.png'
import featureImg02 from '../assets/images/natural.png'
import featureImg03 from '../assets/images/heart.png'




import foodCategoryImg01 from '../assets/images/category1.png'
import foodCategoryImg02 from '../assets/images/category4.png'
import foodCategoryImg03 from '../assets/images/bread.png'

import whyImg from '../assets/images/ödül.png'
import networkImg from '../assets/images/Networking_image.webp'



const featureData = [
  {
    title:'Kadın Girişimine Destek',
    imgUrl: featureImg01,
    desc: "Kadınlardan oluşan küçük bir ekibe ve  çok büyük hayallere destek oluyorsunuz."
  },

  {
    title:'Geleneksel Üretim',
    imgUrl: featureImg02,
    desc: "Edremit'in muhteşem florasında geleneksel üretim ile %100 doğal ürünleri sizin için üretiyoruz."
  },

  {
    title:'Alerji ve Diyet Dostu',
    imgUrl: featureImg03,
    desc: "Beslenmenize uygun içerikler ile pişman etmeyen sağlıklı lezzetler üretiyoruz."
  },
]


const Home = () => {
  const [category,  setCategory] = useState('TUM')
  const [allProducts, setAllProducts] = useState(product)

  useEffect (()=>{

    if(category === 'TUM'){
      setAllProducts(product)
    }

    if(category === 'SUT'){
      const filteredProducts = product.filter(item => item.category === 'Süt Ürünleri')
      setAllProducts(filteredProducts)
    }

    if(category === 'ZEYTINYAGI'){
      const filteredProducts = product.filter(item => item.category === 'Zeytinyağı')
      setAllProducts(filteredProducts)
    }

    if(category === 'EKMEK'){
      const filteredProducts = product.filter(item => item.category === 'Ekmek')
      setAllProducts(filteredProducts)
    }
    

  },[category])
  return <Helmet title="Home">
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
         <div className="giris">
          <br></br>
          <br></br>
          <br></br>
         <h5 className="mb-3">Doğanın kalbinden sofranıza en taze organik ürünler</h5>
          <h1 className="mb-4 giris_title"><span>Sağlıklı yaşam</span> için doğal<br/> seçimlerinizi <span>Yeşil Gurme ile yapın</span></h1>
          <p>Hayatımızda önemli kararlar alırken her zaman iç sesimizi dinlemeye çalıştık. Bu yüzden İSTÜN Bilgisayar Mühendisliği’nden mezun olduktan sonra hayata dair sorunlarınızı yazılım ile kolaylaştırmaya, çözüm üretmeye çalıştık. Şimdi ise doğayı kodluyoruz. Doğanın şifresini sizler için Yeşil Gurme ile çözüyoruz.</p>
          <div className="giris__btns d-flex align-items-center gap-5 mt-4">
                  <button className="siparis__btn d-flex align-items-center justify-content-between"><Link to="/checkout">Sipariş Ver</Link>
                     <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all_products-btn"><Link to="/products">
                  Ürünleri Keşfet</Link></button>
          </div>
          <div className="giris_service d-flex align-items-center gap-5 mt-5">

          <p className="d-flex align-items-center gap-2"><span className="secure_icon"><i class="ri-shield-check-line"></i></span> %100 Güvenli Ödeme</p>

            <p className="d-flex align-items-center gap-2"><span className="earth_icon"><i class="ri-earth-fill"></i></span> Doğayı Seviyoruz</p>

          </div>

         </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="giris_img">
           
          <br></br>
          <br></br>
            <img src={giris_img} alt="giris-img" className="w-100" />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
    <section className="pt-0">
      <Category/>
    </section>
    <section>
      <Container>
        <Row>
        <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">Neden Yeşil Gurme?</h5>
              <h2 className="feature__title">KORUNMASI GEREKEN BİR HAZİNE</h2>
              <h2 className="feature__title">
                Sürdürülebilir <span>DOĞA</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              Özel lezzetlerin peşinden gidip,başta zeytinyağımız olmak üzere gurme ürünlerimizin sofranıza kadar uzanan yolculuğuna tutkuyla bağlandık. Sağlığın ve mutluluğun eksik olmadığı, yemek yemenin ayrı bir zevk verdiği sofralar hayal ettik.
              </p>
              <p className="feature__text">
              Kısa sürede hayal etmediğimiz noktaya gelmemizde bize eşlik eden,hikayemize dokunan herkese çok teşekkür ederiz.{" "}
              </p>
            </Col>
            {
              featureData.map((item,index)=>(
                <Col lg='4' md='6'sm='6'key={index} className='mt-5'>
              <div className="feature_item text-center px-5 py-3">
                <img src={item.imgUrl} alt="feature-img" className="w-25 mb-3"/>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </Col>
              ))
            }
            
         


        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'className="text-center">
            <h2>Popüler Ürünlerimiz</h2>
          </Col>
          <Col lg='12'>
            <div className="food_category d-flex align-items-center justify-content-center gap-4">
              <button  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >Tüm</button>
              <button className={`d-flex align-items-center gap-2 ${
                    category === "SUT" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("SUT")}
                ><img src={foodCategoryImg01} alt=""/>Süt Ürünleri</button>

              <button  className={`d-flex align-items-center gap-2 ${
                    category === "ZEYTINYAGI" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ZEYTINYAGI")}
                ><img src={foodCategoryImg02} alt=""/>Zeytinyağı</button>

              <button className={`d-flex align-items-center gap-2 ${
                    category === "EKMEK" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("EKMEK")}
                ><img src={foodCategoryImg03} alt=""/>Ekmek</button>
            </div>
          </Col>

          {
            allProducts.map(item=>(
              <Col lg='3' md='4' key={item.id} className='mt-5' >
            <ProductCard item={item}/>
          </Col>
            ))
          }

          
        </Row>
      </Container>
    </section>
    <section className="why_choose-us">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <br></br>
            <br></br>
            
            <img src={whyImg} alt="why-yesil-gurme" className="w-100"/>
            
            
          </Col>

          <Col lg='6' md='6'><div className="why_yesil-gurme">
          <br></br>
            <br></br>
            <br></br>
            <h2 className="yesil_gurme-title mb-4">Bizim <span>Önceliklerimiz</span></h2>
            <p className="yesil_gurme-desc">
              Kadınlar ve gençler başta olmak üzere tüm hassas grupların güçlendirilmesi<br></br>
              Birlikte yapmanın ve dayanışmanın artırılması<br></br>
              Doğal çevrenin ve ekosistemin korunması<br></br>
              İnsana yakışır iş olanaklarının geliştirilmesi<br></br>
              Yeşil büyümenin teşvik edilmesi
             </p>

            <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Taze ve Lezzetli Gıdalar
                    </p>
                    <p className="choose__us-desc">
                      En taze mahsülü geleneksel üretim ile sizlerle buluşturuyoruz.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i> Kaliteli Destek
                    </p>
                    <p className="choose__us-desc">
                      Siparişlerinizdeki herhangi bir olumsuz durumda tüm iletişim hesaplarımız ile kaliteli destek veriyoruz.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Her Yerden Sipariş İmkanı{" "}
                    </p>
                    <p className="choose__us-desc">
                      Türkiye'nin dört bir yanından güvenle sipariş oluşturabilirsiniz.
                    </p>
                  </ListGroupItem>
                </ListGroup>
            </div>
            </Col>
          
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>

        <Col lg='6' md='6'>
            <div className="musteri ">
            <h5 className="musteri_yorumlari mb-4">Görüşlerinizi</h5>
            <h2 className="musteri_title mb-4">Sizi <span>Önemsiyoruz</span></h2>
            <p className= "musteri_desc">
            Müşterilerimizin deneyimlerini sizinle paylaşmanın heyecanıyla, sizler için özenle seçtiğimiz müşteri yorumlarını sunuyoruz. İhtiyaçlarınıza ve beklentilerinize uygun ürünleri keşfederken, diğer müşterilerimizin memnuniyetini ve tecrübelerini göz önünde bulundurmanızı sağlamak için buradayız. Siz de bu deneyimlere kulak verin ve gerçek müşteri hikayeleriyle ilham alarak alışverişinizi yapın!
            </p>
            <MusteriSlider/>
            </div>
            
          </Col>
          <Col lg='6' md='6'>
            <br></br>
            <br></br>
            <img src={networkImg} alt="musteri-img" className="w-100"/>
          </Col>

        
        </Row>
      </Container>
    </section>
  </Helmet>;
    
  
};

export default Home