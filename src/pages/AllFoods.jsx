import React , {useState, useEffect }from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from "../components/UI/common-section/CommonSection";
import{Container, Row,Col } from "reactstrap";
import product from '../assets/data/product'
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import '../styles/all-foods.css';
import "../styles/pagination.css";

{/* ======== Ürünlerimiz sayfasındaki önceki sonraki yönlendirme kısmı ========= */}

const AllFoods = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0)
  const searchedProduct = product.filter(item=>{
    if(searchTerm.value === '' ) return item;
    if(item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) return item
  })
  const productPerPage= 12;
  const visitedPage = pageNumber * productPerPage
  const displayPage = searchedProduct.slice(visitedPage, 
  visitedPage + productPerPage);

  const pageCount = Math.ceil (searchedProduct.length/ productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  {/* ======== Ürünlerimiz sayfasındaki arama yapma ve sıralama kısmı ========= */}

  return (<Helmet title='All-Foods'>
    <CommonSection title='Tüm Ürünlerimiz'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='8'>
            <div className="search_widget d-flex align-items-center justify-content-between w-50">
              <input type="text" placeholder="Arama..." value={searchTerm} onChange={e=> setSearchTerm(e.target.value)}/>
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
          <Col lg='6' md='6' sm='6' className="mb-5">
            <div className="sorting_widget text-end">
              <select className="w-50">
                <option>Varsayılan</option>
                <option value="Artan"> Alfabetik olarak, A-Z</option>
                <option value="Azalan">Alfabetik olarak, Z-A</option>
                <option value="Yüksek Fiyat">Yüksek Fiyat</option>
                <option value="Düşük Fiyat">Düşük Fiyat</option>
              </select>
            </div>
          </Col>
          {
            displayPage.map((item)=>(
              <Col lg='3' md='4' sm='6' xs='6'key={item.id} className='mb-4'> { ""}
                <ProductCard item={item}  /></Col>
              
            ))
          }
          <div>
            <ReactPaginate pageCount={pageCount}
            onPageChange={changePage}
            previousLabel='Önceki'
            nextLabel='Sonraki'
            containerClassName="paginationBttns"
            />
            
          </div>
        </Row>

      </Container>
    </section>

  </Helmet>
  )
}

export default AllFoods