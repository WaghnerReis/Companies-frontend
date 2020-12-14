import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string
}

function getValidationErrors(err: ValidationError): Errors {
  const validationErros: Errors = {};

  err.inner.forEach((error) => {
    if (error.path) {
      validationErros[error?.path] = error.message;
    }
  });

  return validationErros;
}

export default getValidationErrors;
