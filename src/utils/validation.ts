interface Erros {
  name?: string;
  email?: string;
  notes?: string;
}

export const validate = values => {
  const errors = {} as Erros;
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.notes) {
    errors.notes = 'Required';
  }
  return errors;
};
