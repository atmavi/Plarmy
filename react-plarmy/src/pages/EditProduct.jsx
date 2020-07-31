import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EditProduct() {
   return (
      <div className="edit-product">
         <h1>Edit Product</h1>
         <Formik
            initialValues={{ email: '', password: '', test: '' }}
            validate={values => {
               const errors = {};
               if (!values.email) {
                  errors.email = 'Required';
               } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
               ) {
                  errors.email = 'Invalid email address';
               }
               return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
               setTimeout(() => {
                  console.log(values)
                  setSubmitting(false);

               }, 400);
            }}
         >
            {({ isSubmitting }) => (
               <Form className="form">
                  <label className="form__label" htmlFor="name">Name</label>
                  <Field
                     className="form__name"
                     name="name"
                  />

                  <label className="form__label" htmlFor="price">Price</label>
                  <Field
                     className="form__price"
                     name="price"
                  />

                  <label className="form__label" htmlFor="sell-volume">Selling volume</label>
                  <Field
                     className="form__sell-volume"
                     name="sell-volume"
                  />

                  <label className="form__label" htmlFor="image">Image</label>
                  <Field
                     className="form__image"
                     name="image"
                  />

                  <label className="form__label" htmlFor="author">Author</label>
                  <Field
                     className="form__author"
                     name="author"
                  />

                  <label className="form__label" htmlFor="type">type</label>
                  <Field
                     className="form__type"
                     name="type"
                  />


                  {/* <Field type="text" name="email" />
                     <ErrorMessage name="email" component="div" />
                     <Field type="password" name="password" />
                     <ErrorMessage name="password" component="div" /> */}

                  <button
                     type="submit"
                     disabled={isSubmitting}
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


