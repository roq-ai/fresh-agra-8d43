import * as yup from 'yup';

export const orderItemValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  food_item_id: yup.string().nullable().required(),
  order_id: yup.string().nullable().required(),
});
