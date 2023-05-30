import React from 'react'
import '../../../styles/product-card.css';
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";


{/* ======== Ürünlerimiz sayfasındaki ürünlerin bilgisinin kart şeklinde gözükmesi ========= */}

const ProductCard = (props) => {
  const {id, title,image01, price} = props.item

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className='product_item'>
      <div className="product_img">
        <img src={image01} alt="product-img" className= "w-50"/>
      </div>
      <div className="product-content">
        
      <h5><Link to={''}>{title}</Link></h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product_price">₺{price}</span>
          <button className="sepet_btn"onClick={addToCart}>Sepete Ekle</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard