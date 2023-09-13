import * as yup from 'yup';

export const searchHistoryValidationSchema = yup.object().shape({
  search_term: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
