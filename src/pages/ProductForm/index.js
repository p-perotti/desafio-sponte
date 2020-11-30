import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiArrowLeft } from 'react-icons/fi';
import { Formik, Form, Field } from 'formik';
import { format } from 'date-fns';
import * as Yup from 'yup';

import { FormContainer, InputGrid } from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import NumberFormatInput from '../../components/NumberFormatInput';
import ChipInput from '../../components/ChipInput';
import ImageInput from '../../components/ImageInput';

function ProductForm() {
  const { id } = useParams();

  const history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const [categories, setCategories] = useState([]);

  const [images, setImages] = useState({ loaded: [] });

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(100, 'Limitado à 100 caracteres.')
      .required('Preenchimento obrigatório.'),
    description: Yup.string(),
    barcode: Yup.number(),
    date: Yup.date().max(new Date(), 'Não deve ser superior à data atual.'),
    value: Yup.number()
      .moreThan(0, 'Deve ser maior que 0.')
      .required('Preenchimento obrigatório.'),
    weight: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
    height: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
    width: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
    length: Yup.number().moreThan(0, 'Deve ser maior que 0.'),
  });

  useEffect(async () => {
    if (id) {
      const res = await api.get(`products/${id}`);

      if (res.data) {
        const {
          title,
          description,
          barcode,
          date,
          value,
          weight,
          height,
          width,
          length,
          categories: loadedCategories,
          images: loadedImages,
        } = res.data;

        setFormValues({
          title,
          description,
          barcode,
          date,
          value,
          weight,
          height,
          width,
          length,
        });

        if (loadedCategories) {
          setCategories(loadedCategories.split(','));
        }

        if (loadedImages) {
          setImages({ ...images, loaded: loadedImages });
        }
      }
    }
  }, [id]);

  const handleFormOnKeyDown = (event) => {
    if ((event.charCode || event.keyCode) === 13) {
      event.preventDefault();
    }
  };

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true);

      const data = new FormData();

      data.append('title', values.title);
      data.append('description', values.description);
      data.append('barcode', values.barcode);
      data.append('date', values.date);
      data.append('value', values.value);
      data.append('weight', values.weight);
      data.append('height', values.height);
      data.append('width', values.width);
      data.append('length', values.length);
      data.append('categories', categories.join(','));

      if (images.toUpload) {
        images.toUpload.forEach((image) => {
          data.append('files', image);
        });
      }

      if (id) {
        await api.put(`products/${id}`, data);
        toast.success('Produto alterado com sucesso.');
        setIsSubmitting(false);
      } else {
        await api.post('products', data);
        toast.success('Produto adicionado com sucesso.');
        history.push('/');
      }
    } catch (error) {
      toast.error('Não foi possível salvar o produto.');
      setIsSubmitting(false);
    }
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
        <FormContainer>
          <Formik
            enableReinitialize
            initialValues={formValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form onKeyDown={handleFormOnKeyDown}>
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
                      component={NumberFormatInput}
                      label="Código de barras"
                      name="barcode"
                      prefix=""
                      decimalScale={0}
                      thousandSeparator={false}
                      value={values.value}
                      onChange={(value) => setFieldValue('value', value)}
                    />
                    <Field
                      component={Input}
                      type="date"
                      label="Data de aquisição"
                      name="date"
                    />
                  </InputGrid>
                  <InputGrid templateColumns="1fr 1fr" marginTop>
                    <Field
                      component={NumberFormatInput}
                      label="Valor"
                      name="value"
                      value={values.value}
                      onChange={(value) => setFieldValue('value', value)}
                    >
                      Categoria
                    </Field>
                    <Field
                      component={NumberFormatInput}
                      label="Peso"
                      name="weight"
                      hint="(em kg)"
                      prefix=""
                      decimalScale={3}
                      thousandSeparator={false}
                      value={values.value}
                      onChange={(value) => setFieldValue('value', value)}
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
                  <ChipInput
                    name="category"
                    label="Categoria"
                    hint="(informe a categoria e tecle enter para adicionar)"
                    values={categories}
                    setValues={setCategories}
                  />
                </fieldset>
                <fieldset>
                  <legend>Imagens</legend>
                  <ImageInput images={images} setImages={setImages} />
                </fieldset>
                <footer>
                  <button type="submit" disabled={isSubmitting}>
                    Salvar
                  </button>
                </footer>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </main>
    </>
  );
}

export default ProductForm;
