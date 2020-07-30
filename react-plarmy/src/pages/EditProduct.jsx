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
               <Form>
                  <Field type="text" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />

                  <Field type="text" name="test" />
                  <ErrorMessage name="test" component="div" />

                  <button type="submit" disabled={isSubmitting}>
                     Submit
                  </button>
               </Form>
            )}
         </Formik>
      </div>

   )
}

export default EditProduct;


