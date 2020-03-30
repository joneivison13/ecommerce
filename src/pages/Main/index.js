import React from "react";
import Back from "../../assets/images.jpg";
import Product1 from "../../assets/product1.jpg";
import Product2 from "../../assets/product2.jpg";
import Product from "../../assets/product3.jpg";

export default function Main() {
  return (
    <div className="main">
      <img src={Back} className="banner" alt="Super Back Week" />

      <div className="promocao">
        <a href="/">
          <div className="promo1">
            <img src={Product1} alt="" className="fake-img" />
            <p className="product-name">Seu Produto</p>
            <p className="price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

        <a href="/">
          <div className="promo1 ml-5">
            <img src={Product2} alt="" className="fake-img" />

            <p className="ml-3 product-name">Seu Produto</p>
            <p className="ml-3 price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

        <a href="/">
          <div className="promo1 ml-5">
            <img src={Product} alt="" className="fake-img" />

            <p className="ml-3 product-name">Seu Produto</p>
            <p className="ml-3 price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

      </div>
    </div>
  );
}
