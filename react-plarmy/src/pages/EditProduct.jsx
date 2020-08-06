import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { ProductSchema } from '../schema/product';
import { getProduct } from '../services/products';

import { updateProduct } from '../services/products';
import NotFound from './NotFound';


function EditProduct() {
   const history = useHistory();
   let { id } = useParams();
   const [details, setDetails] = useState({});

   useEffect(() => {
      getProduct(id)
         .then(data => {
            ProductSchema.isValid(data)
               .then(valid => {
                  if (valid) {
                     setDetails(data);
                     return;
                  }

                  history.push('/*')
               })
         })
         .catch(err => console.log('No product found.', err))
   }, [id, history]);


   return !details ? <NotFound /> : (
      <div className="edit-product">
         <h1>Edit Product</h1>
         <Formik
            enableReinitialize
            initialValues={{
               name: details.name,
               price: details.price,
               sellVolume: details.sellVolume,
               image: details.image,
               author: details.author,
               type: details.type
            }}
            validationSchema={ProductSchema}
            onSubmit={values => {
               console.log('From submit >>>', values)
               updateProduct(id, values)
                  .then(res => alert('Product has been updated.'))
            }}
         >
            {({ errors, touched, values }) => (
               <Form className="form">
                  <label className="form__label" htmlFor="name">Name</label>
                  <Field
                     className="form__name"
                     name="name"
                     value={values.name || ''}
                  />
                  {errors.name && touched.name && (
                     <ErrorMessage name="name" component="span" className="error-message" />
                  )}

                  <label className="form__label" htmlFor="price">Price</label>
                  <Field
                     className="form__price"
                     name="price"
                     value={values.price || ''}
                  />
                  {!errors.price && touched.price && (
                     <ErrorMessage name="price" component="span" className="error-message" />
                  )}

                  <label className="form__label" htmlFor="sell-volume">Selling volume</label>
                  <Field
                     className="form__sell-volume"
                     name="sellVolume"
                     value={values.sellVolume || ''}
                  />

                  <label className="form__label" htmlFor="image">Image</label>
                  <Field
                     className="form__image"
                     name="image"
                     value={values.image || ''}
                  />

                  <label className="form__label" htmlFor="author">Author</label>
                  <Field
                     className="form__author"
                     name="author"
                     value={values.author || ''}
                  />

                  <label className="form__label" htmlFor="type">type</label>
                  <Field
                     className="form__type"
                     name="type"
                     value={values.type || ''}
                  />

                  <button
                     type="submit"
                     className="btn btn--primary mt-1 form__btn"
                  >
                     Submit
                  </button>
               </Form>
            )}
         </Formik>
      </div >
   )
}

export default EditProduct;


