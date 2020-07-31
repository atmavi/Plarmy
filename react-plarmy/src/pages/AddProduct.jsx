import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { addProduct } from '../services/products';


const ProductSchema = Yup.object().shape({
   name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   price: Yup.number()
      .min(0, 'Product must have a price')
      .required('Required'),
});

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
               console.log(values);
               addProduct(values)
                  .then(res => alert('Success'))
            }}
         >
            {({ errors, touched }) => (
               <Form className="form">
                  <label className="form__label" htmlFor="name">Name</label>
                  <Field
                     className="form__name"
                     name="name" />
                  {errors.name && touched.name && (
                     <div><ErrorMessage name="name" component="span" className="error-message" /></div>
                  )}

                  <label className="form__label" htmlFor="price">Price</label>
                  <Field
                     className="form__price"
                     name="price" />

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


