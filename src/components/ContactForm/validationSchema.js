import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('⚠ "Це поле є обов\'язковим"')
    .matches(/[а-яА-Я^]+/g, {
      message: 'Поле має містити тільки літери української абетки',
      excludeEmptyString: true,
    }),

  email: yup
    .string()
    .matches(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
      {
        message: 'Це поле має містити валідний email "user@email.com"',
        excludeEmptyString: true,
      }
    )
    .required('⚠ "Це поле є обов\'язковим"')
    .email('Це поле має містити валідний email "user@email.com')
    .min(6, 'minLength: 6 characters')
    .max(100, 'maxLength: 100 characters'),

  phone: yup.string().required('⚠ "Це поле є обов\'язковим"'),

  textarea: yup
    .string()
    .required('⚠ "Це поле є обов\'язковим"')
    .min(10, 'Повідомлення повинно містити мінімум 10 символів'),
});
