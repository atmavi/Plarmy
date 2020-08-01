import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
   name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   price: Yup.number()
      .min(0, 'Product must have a price')
      .required('Required'),
});