import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import { format } from 'date-fns';
import * as Yup from 'yup';

import {
  FormContainer,
  InputGrid,
  CategoryInput,
  ChipContainer,
} from './styles';

import Header from '../../components/Header';
import Box from '../../components/Box';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Chip from '../../components/Chip';

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
    categories: [],
  });

  const [newCategory, setNewCategory] = useState('');

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
    categories: Yup.array().of(Yup.string()),
  });

  const handleFormOnKeyDown = (event) => {
    if ((event.charCode || event.keyCode) === 13) {
      event.preventDefault();
    }
  };

  const handleAddCategory = (event, categories, setFieldValue) => {
    if ((event.charCode || event.keyCode) === 13) {
      if (!categories.find((category) => category === event.target.value)) {
        const updatedCategories = categories;
        updatedCategories.push(event.target.value);
        setFieldValue('categories', updatedCategories);
      }
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (event, categories, setFieldValue) => {
    const updatedCategories = categories;
    updatedCategories.splice(event.target.id, 1);
    setFieldValue('categories', updatedCategories);
  };

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
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form onKeyDown={handleFormOnKeyDown}>
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
                  <fieldset>
                    <legend>Categorias</legend>
                    <CategoryInput htmlFor="category">
                      Categoria
                      <span>
                        (informe a categoria e tecle enter para adicionar)
                      </span>
                      <input
                        id="category"
                        name="category"
                        value={newCategory}
                        onChange={(event) => setNewCategory(event.target.value)}
                        onKeyDown={(event) =>
                          handleAddCategory(
                            event,
                            values.categories,
                            setFieldValue
                          )
                        }
                      />
                    </CategoryInput>
                    <ChipContainer>
                      {values.categories.map((category) => (
                        <Chip
                          key={category}
                          label={category}
                          onClick={(event) =>
                            handleRemoveCategory(
                              event,
                              values.categories,
                              setFieldValue
                            )
                          }
                        />
                      ))}
                    </ChipContainer>
                  </fieldset>
                  <footer>
                    <button type="submit">Salvar</button>
                  </footer>
                </FormContainer>
              </Form>
            )}
          </Formik>
        </Box>
      </main>
    </>
  );
}

export default ProductForm;
