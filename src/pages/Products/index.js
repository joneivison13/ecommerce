import React from "react";

import {Link} from 'react-router-dom'

import api from "../../services/api";
import Main from "../Main";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";

export default function Product() {

  return (
    <>
      <Header />

      <Main />

      <div className="produto-map">{api.map(product => (
      <div className="product" key={product.id}>
        <Link to={`/product/${product.id}`}>
      <span className="">
        <img className="img-body" src={product.thumbnail} alt="" />

      <p className="product-name">{product.name}</p>
      <p className="price">{product.price}</p>
      </span>
    </Link>
      </div>
    ))}</div>

      <Footer />
    </>
  );
}
