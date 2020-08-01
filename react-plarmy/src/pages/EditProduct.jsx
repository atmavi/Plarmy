import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ProductSchema } from '../schema/product';
import { getProduct } from '../services/products';


function EditProduct() {
   let { id } = useParams();
   const [details, setDetails] = useState({});

   useEffect(() => {
      getProduct(id)
         .then(data => {
            const {
               name,
               price,
               sellVolume,
               image,
               author,
               type
            } = data;

            let productDetails = {
               name,
               price,
               sellVolume,
               image,
               author,
               type
            }
            setDetails(productDetails)
         })
   }, [id]);


   return (
      <div className="edit-product">
         <h1>Edit Product</h1>
         <Formik
            initialValues={details}
            validationSchema={ProductSchema}
            onSubmit={values => {
               console.log(values)
            }}
         >
            {({ errors, touched }) => (
               <Form className="form">
                  <label className="form__label" htmlFor="name">Name</label>
                  <Field
                     className="form__name"
                     name="name"
                  />
                  {errors.name && touched.name && (
                     <ErrorMessage name="name" component="span" className="error-message" />
                  )}

                  <label className="form__label" htmlFor="price">Price</label>
                  <Field
                     className="form__price"
                     name="price"
                  />

                  <label className="form__label" htmlFor="sell-volume">Selling volume</label>
                  <Field
                     className="form__sell-volume"
                     name="sellVolume"
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


