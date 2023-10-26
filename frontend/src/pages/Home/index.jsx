import { Container, Wrapper, Head, ProductWrapper } from './styles'
import { IconButton } from '../../components/IconButton'
import { ProductContainer } from '../../components/ProductContainer'
import { FiPlus } from 'react-icons/fi'

import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';

export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get('/produtos').then((response) => {

      setProdutos(response.data);

    }).catch((error) => {

      console.error('Erro ao obter a lista de produtos:', error);

    });
  }, [produtos]);

  return (
    <Container>
      <Wrapper>
        <Head>
          <h1>Produtos</h1>
          <IconButton icon={FiPlus} to="/New" />
        </Head>
        <ProductWrapper>
          {produtos.map((produto) => (
            <ProductContainer key={produto.id} data={produto} />
          ))}
        </ProductWrapper>
      </Wrapper>
    </Container>
  );
}