import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function EditProduct() {
   return (
      <div>
         <h1>Any place in your app!</h1>
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
               <div className="edit-product">
                  <Form className="edit-product__form">
                     <label htmlFor="name">Name</label>
                     <Field
                        className="edit-product__name"
                        name="name"
                     />

                     <label htmlFor="price">Price</label>
                     <Field
                        className="edit-product__price"
                        name="price"
                     />

                     <label htmlFor="sell-volume">Selling volume</label>
                     <Field
                        className="edit-product__sell-volume"
                        name="sell-volume"
                     />

                     <label htmlFor="image">Image</label>
                     <Field
                        className="edit-product__image"
                        name="image"
                     />

                     <label htmlFor="author">Author</label>
                     <Field
                        className="edit-product__author"
                        name="author"
                     />

                     <label htmlFor="type">type</label>
                     <Field
                        className="edit-product__type"
                        name="type"
                     />





                     {/* <Field type="text" name="email" />
                     <ErrorMessage name="email" component="div" />
                     <Field type="password" name="password" />
                     <ErrorMessage name="password" component="div" /> */}
                     <button type="submit" disabled={isSubmitting}>
                        Submit
                     </button>
                  </Form>
               </div>
            )}
         </Formik>
      </div >

   )
}

export default EditProduct;


