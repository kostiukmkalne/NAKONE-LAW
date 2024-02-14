import './Form.css';
import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  caseDescription: "",
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (!/^\+?3?8?(0\d{9})$/i.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.caseDescription) {
    errors.caseDescription = "Required";
  }

  return errors;
};

const SimpleForm = () => (
  <Formik
    initialValues={initialValues}
    validate={validate}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >

    {({ isSubmitting }) => (

      <Form
      className="form"
      >
        <Field
          type="text"
          name="name"
          placeholder="Your name"
          className="name"
        />
        <ErrorMessage name="name" component="div" />

        <Field
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          className="phone-number"
        />
        <ErrorMessage name="phoneNumber" component="div" />

        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="email"
        />
        <ErrorMessage name="email" component="div" />

        <Field
          as="textarea"
          name="caseDescription"
          placeholder="Write about your case"
          className="text-area"
        />
        <ErrorMessage name="caseDescription" component="div" />

        <button type="submit" disabled={isSubmitting} className="form-buttom">
          SEND
        </button>
      </Form>
    )}
  </Formik>
);

export default SimpleForm;
