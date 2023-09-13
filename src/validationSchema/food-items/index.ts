import * as yup from 'yup';

export const foodItemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  vendor_id: yup.string().nullable().required(),
});
