import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Product from './Product';

export default class Products extends Component {
  render() {
    const { productsInfos, addProduct } = this.props;
    return (
      <div>
        {
          !productsInfos.length > 0
            ? <p>Nenhum produto foi encontrado</p>
            : productsInfos.map((element) => (
              <Product
                productInfo={ element }
                key={ element.id }
                addProduct={ addProduct }
                { ...this.props }
              />
            ))
        }
      </div>
    );
  }
}

Products.propTypes = {
  productsInfos: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
};
