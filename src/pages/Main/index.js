import React from "react";
import Back from "../../assets/images.jpg";
import Product1 from "../../assets/foto1-mod.jpeg";
import Product2 from "../../assets/foto4-mod.jpeg";
import Product from "../../assets/foto3-mod.jpeg";
import Product4 from "../../assets/foto4-mod.jpeg";

export default function Main() {
  return (
    <div className="main">
      <img src={Back} className="banner" alt="Super Back Week" />

      <div className="promocao">
        <a href="/">
          <div className="promo1 m-0">
            <img src={Product1} alt="" className="fake-img" />
            <p className="product-name">Seu Produto</p>
            <p className="price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

        <a href="/">
          <div className="promo1 m-1">
            <img src={Product2} alt="" className="fake-img" />

            <p className=" product-name">Seu Produto</p>
            <p className=" price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

        <a href="/">
          <div className="promo1">
            <img src={Product} alt="" className="fake-img" />

            <p className="  product-name">Seu Produto1</p>
            <p className="price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

        <a href="/">
          <div className="promo1">
            <img src={Product4} alt="" className="fake-img" />

            <p className=" product-name">Seu Produto</p>
            <p className="price">
              Valor: <span>R$200,00</span>
            </p>
          </div>
        </a>

      </div>
    </div>
  );
}
