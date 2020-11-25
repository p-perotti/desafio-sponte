import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Form, Grid } from './styles';

import Header from '../../components/Header';
import Box from '../../components/Box';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

function ProductForm() {
  return (
    <>
      <Header
        title="Produto"
        linkTo="/"
        linkIcon={FiArrowLeft}
        linkText="Voltar"
      />
      <main>
        <Box>
          <Form>
            <fieldset>
              <legend>Dados</legend>
              <Input label="Nome" name="name" />
              <TextArea label="Descrição" name="description" />
              <Grid templateColumns="2fr 1fr" marginTop>
                <Input label="Código de barras" name="description" />
                <Input label="Data de aquisição" name="description" />
              </Grid>
              <Grid templateColumns="1fr 1fr" marginTop>
                <Input label="Valor" name="description" />
                <Input label="Peso" name="description" hint="(em kg)" />
              </Grid>
            </fieldset>
            <fieldset>
              <legend>Medidas</legend>
              <Grid templateColumns="1fr 1fr 1fr">
                <Input label="Altura" name="height" hint="(em cm)" />
                <Input label="Largura" name="width" hint="(em cm)" />
                <Input label="Comprimento" name="length" hint="(em cm)" />
              </Grid>
            </fieldset>
            <footer>
              <button type="submit">Salvar</button>
            </footer>
          </Form>
        </Box>
      </main>
    </>
  );
}

export default ProductForm;
