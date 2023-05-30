import React from 'react'
import '../styles/contact.css';


const background = new URL("../assets/images/banner.jpg", import.meta.url)


const Contact = () => {
  return (
    

    <div className="iletisim"> 
    <img src={background} />
    <br></br>
    <div className='iletisim-container'>
    <h2>  İLETİŞİM ADRESLERİMİZ</h2>
  
    <p> Yeşil Gurme Firma Adresimiz: Havran Mescit Mah. Edremit - Balıkesir Yolu Cad. </p>
    <span>Telefon: 01712345678</span> <br></br>
    <span>Email: yesilgurme@gmail.com</span>
    </div>
     </div>
  )
}

export default Contact

