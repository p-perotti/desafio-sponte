/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ProductContainer } from './styles';

import api from '../../services/api';
import { formatCurrency } from '../../util/format';

import Header from '../../components/Header';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    try {
      const res = await api.get('products');
      setProducts(res.data);
    } catch (error) {
      toast.error('Não foi possível carregar os produtos.');
    }
  }, []);

  return (
    <>
      <Header
        title="Estoque"
        linkTo="/product/new"
        linkIcon={FiPlus}
        linkText="Novo"
      />
      <main>
        {products.map((product) => {
          return (
            <ProductContainer>
              <header>
                {product.images && (
                  <img src={product.images[0]} alt={product.name} />
                )}
              </header>
              <h1>{product.title}</h1>
              {product.description && <p>{product.description}</p>}
              <footer>
                <p>
                  Preço
                  <strong>{formatCurrency(product.value)}</strong>
                </p>
                <Link to={`/product/${product.id}`}>Editar</Link>
              </footer>
            </ProductContainer>
          );
        })}
      </main>
    </>
  );
}

export default ProductList;
