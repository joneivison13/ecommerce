import React, { Component } from "react";
import api from '../../services/api'
import Main from "../Main";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";

export default class Product extends Component {
  render() {
    return (
      <>
        <Header />
        
        <Main />

    <p className="produto-map">{api.map(product => (
      <div className="product" key={product.id}>
        <a href="/em-breve">
      <span className="">
        <img className="img-body" src={product.thumbnail} alt="" />

      <p className="product-name">{product.name}</p>
      <p className="price">{product.price}</p>
      </span>
    </a>
      </div>
    ))}</p>

      <Footer />
      </>
    );
  }
}
