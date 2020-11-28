import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Container } from './styles';

import Header from '../../components/Header';

function ProductList() {
  return (
    <Container>
      <Header
        title="Estoque"
        linkTo="/product/new"
        linkIcon={FiPlus}
        linkText="Novo"
      />
    </Container>
  );
}

export default ProductList;
