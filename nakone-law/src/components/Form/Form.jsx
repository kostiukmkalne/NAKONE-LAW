import "./Form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";

const initialValues = {
  name: "",
  phoneNumber: "",
  email: "",
  caseDescription: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\+?3?8?(0\d{9})$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  caseDescription: Yup.string().required("Required"),
});

const SimpleForm = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form className="form">
        <Field
          type="text"
          name="name"
          placeholder="Your name"
          className="form-name"
        />
        <ErrorMessage name="name" component="div" />

        <Field
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          className="form-phone-number"
        />
        <ErrorMessage name="phoneNumber" component="div" />

        <Field
          type="email"
          name="email"
          placeholder="Email"
          className="form-email"
        />
        <ErrorMessage name="email" component="div" />

        <Field
          as="textarea"
          name="caseDescription"
          placeholder="Write about your case"
          className="form-text-area"
        />
        <ErrorMessage name="caseDescription" component="div" />

        <Button type="submit" disabled={isSubmitting} className="form-button">
          Send
        </Button>
      </Form>
    )}
  </Formik>
);

export default SimpleForm;
