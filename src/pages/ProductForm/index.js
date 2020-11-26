import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import { format } from 'date-fns';
import * as Yup from 'yup';

import { FormContainer, InputGrid } from './styles';

import Header from '../../components/Header';
import Box from '../../components/Box';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';

function ProductForm() {
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    barcode: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    value: '',
    weight: '',
    height: '',
    width: '',
    length: '',
  });

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(100, 'Limitado à 100 caracteres.')
      .required('Preenchimento obrigatório.'),
    description: Yup.string(),
    barcode: Yup.number(),
    date: Yup.date().max(new Date(), 'Não deve ser superior à data atual.'),
    value: Yup.number().required('Preenchimento obrigatório.'),
    weight: Yup.number(),
    height: Yup.number(),
    width: Yup.number(),
    length: Yup.number(),
  });

  const handleSubmit = (values) => {
    // handleSave(values);
  };

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
          <Formik
            enableReinitialize
            initialValues={formValues}
            validationSchema={validationSchema}
            // onSubmit={handleSubmit}
          >
            <Form>
              <FormContainer>
                <fieldset>
                  <legend>Dados</legend>
                  <Field component={Input} label="Título" name="title" />
                  <Field
                    component={TextArea}
                    label="Descrição"
                    name="description"
                  />
                  <InputGrid templateColumns="2fr 1fr" marginTop>
                    <Field
                      component={Input}
                      label="Código de barras"
                      name="barcode"
                    />
                    <Field
                      component={Input}
                      type="date"
                      label="Data de aquisição"
                      name="date"
                    />
                  </InputGrid>
                  <InputGrid templateColumns="1fr 1fr" marginTop>
                    <Field component={Input} label="Valor" name="value" />
                    <Field
                      component={Input}
                      label="Peso"
                      name="weight"
                      hint="(em kg)"
                    />
                  </InputGrid>
                </fieldset>
                <fieldset>
                  <legend>Medidas</legend>
                  <InputGrid templateColumns="1fr 1fr 1fr">
                    <Field
                      component={Input}
                      type="number"
                      label="Altura"
                      name="height"
                      hint="(em cm)"
                    />
                    <Field
                      component={Input}
                      type="number"
                      label="Largura"
                      name="width"
                      hint="(em cm)"
                    />
                    <Field
                      component={Input}
                      label="Comprimento"
                      type="number"
                      name="length"
                      hint="(em cm)"
                    />
                  </InputGrid>
                </fieldset>
                <footer>
                  <button type="submit">Salvar</button>
                </footer>
              </FormContainer>
            </Form>
          </Formik>
        </Box>
      </main>
    </>
  );
}

export default ProductForm;
