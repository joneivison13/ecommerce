import React, { Component } from "react";

import api from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default class Purchase extends Component {
  state = {
    product: {},
    frete: "",
  };

  async componentDidMount() {
    const { product } = this.props.match.params;

    const products = product - 1;

    const data = api[products];

    this.setState({ product: data });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.frete)
  }
  render() {
    return (
      <>
        <Header />
        <div className="product-group">
          <img src={this.state.product.thumbnail} alt="" />
          <div className="product-flex">
            <h2>{this.state.product.name}</h2>
            <p>{this.state.product.description}</p>
            <div className="sale">
              <p className="price">{this.state.product.price}</p>
              <button
                onClick={() => {
                  alert(`${this.state.product.name} comprado com sucesso :)`);
                  alert("Só que não");
                }}
                className="btn btn-danger py-2"
                type="button"
              >
                Comprar
              </button>
            </div>
            <p className="p-frete">
              Calcule o frete e o prazo de entrega estimados para sua região.
            </p>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={(e) => this.setState({ frete: e.target.value })}
                type="text"
                name="frete"
                placeholder="Digite seu CEP"
              />
              <button className="btn btn-success" type="submit">
                Calcular
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
