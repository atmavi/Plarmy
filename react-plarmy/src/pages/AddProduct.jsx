import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { addProduct } from '../services/products';
import { ProductSchema } from '../schema/product';


function AddProduct() {
   return (
      <div className="add-product">
         <h1>Add Product</h1>
         <Formik
            initialValues={{
               name: '',
               price: '',
               sellVolume: '',
               image: '',
               author: '',
               type: ''
            }}
            validationSchema={ProductSchema}
            onSubmit={values => {
               addProduct(values)
                  .then(res => alert('Success'))
                  .catch(err => console.log(err))
            }}
         >
            {({ errors, touched }) => (
               <Form className="form">
                  <label className="form__label" htmlFor="name">Name</label>
                  <Field
                     className="form__name"
                     name="name" />
                  {errors.name && touched.name && (
                     <ErrorMessage name="name" component="span" className="error-message" />
                  )}

                  <label className="form__label" htmlFor="price">Price</label>
                  <Field
                     className="form__price"
                     name="price" />
                  {errors.price && touched.price && (
                     <ErrorMessage name="price" component="span" className="error-message" />
                  )}

                  <label className="form__label" htmlFor="sell-volume">Selling volume</label>
                  <Field
                     className="form__sell-volume"
                     name="sellVolume" />

                  <label className="form__label" htmlFor="image">Image</label>
                  <Field
                     className="form__image"
                     name="image" />

                  <label className="form__label" htmlFor="author">Author</label>
                  <Field
                     className="form__author"
                     name="author" />

                  <label className="form__label" htmlFor="type">type</label>
                  <Field
                     className="form__type"
                     name="type" />
                  <button
                     type="submit"
                     className="btn btn--primary mt-1 form__btn">
                     Submit
                  </button>
               </Form>
            )}
         </Formik>
      </div >
   )
}

export default AddProduct;


