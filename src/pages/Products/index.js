import React, { Component } from "react";
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";
import product6 from "../../assets/product6.jpg";
import Main from "../Main";
import Header from "../../components/Header/";
import Footer from "../../components/Footer/";

export default class Product extends Component {
  render() {
    return (
      <>
        <Header />
        
        <Main />

        <div className="container d-block">
          <div className="product d-block">
            <a href="/em-breve">
              <span className="product-body d-block">
                <img className="img-body" src={product1} alt="" />

                <p className="product-name">Produto</p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>

            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product2} alt="" />

                <p className="product-name">Produto</p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>

            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product3} alt="" />

                <p className="product-name">Produto</p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>

            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product4} alt="" />

                <p className="product-name">Produto</p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>
            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product5} alt="" />

                <p className="product-name">Produto</p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>
            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product6} alt="" />

                <p className="product-name">Produto </p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>
            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product6} alt="" />

                <p className="product-name">Produto </p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>
            <a href="/em-breve">
              <span className="product-body">
                <img className="img-body" src={product6} alt="" />

                <p className="product-name">Produto </p>
                <p className="price">Valor:R$200,00</p>
              </span>
            </a>
          </div>
        </div>

      <Footer />
      </>
    );
  }
}
