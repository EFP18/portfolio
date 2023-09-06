import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // const serviceId = process.env.SERVICE_ID;
  // const templateId = process.env.TEMPLATE_ID;
  // const publicKey = process.env.SERVICE_ID;

  const [buttonState, setButtonState] = useState('Send Message');

  const [disabled, setDisabled] = useState(false);

  const formik = useFormik({
    //we have created our initailValues object in a format EmailJS accepts
    initialValues: {
      from_name: '', //user name
      to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
      subject: '', // subject of email
      reply_to: '', // user email
      message: '', // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required('* Name field is required'),
      subject: Yup.string().required('* Subject field is required'),
      reply_to: Yup.string()
        .email('Invalid email address')
        .required('* Email field is required'),
      message: Yup.string().required('* Message field is required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      console.log('values', values);
      try {
        emailjs
          .send(
            'service_43sbf2h',
            'template_ahhtyl7',
            values,
            'iYo98xn2WeUOCkC5-'
          )
          .then(() => {
            console.log('email sent');
            setButtonState(
              'Thank you for your message! I will get back to you as soon as possible.'
            );
            setSubmitting(false);
            resetForm();
            setDisabled(true);
          });
      } catch {
        setButtonState('Send Email');
        setSubmitting(false);
      }
    },
  });

  return (
    <div
      className='container contactFormStyle'
      style={{
        width: '60%',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
      }}
    >
      <h1
        id='contact'
        className='contactTitle'
        style={{ marginLeft: '30px', marginBottom: '30px' }}
      >
        Contact
      </h1>
      <form className='formFields' onSubmit={formik.handleSubmit}>
        {/* <div className='col-12 col-md-4 firstCol'> */}
        <label htmlFor='from_name' />
        <input
          id='from_name'
          name='from_name'
          type='text'
          autoComplete='off'
          placeholder='Full Name'
          onChange={formik.handleChange}
          value={formik.values.from_name}
          className='indivFields'
        />
        <div
          className={`expandable ${
            formik.touched.from_name && formik.errors.from_name ? 'show' : ''
          }`}
        >
          {formik.errors.from_name}
          {/* </div> */}
        </div>
        {/* <div className='col-12 col-md-4 firstCol'> */}
        <label htmlFor='subject' />
        <input
          id='subject'
          name='subject'
          type='text'
          autoComplete='off'
          placeholder='Phone Number'
          onChange={formik.handleChange}
          value={formik.values.subject}
          className='indivFields'
        />
        <div
          className={`expandable ${
            formik.touched.subject && formik.errors.subject ? 'show' : ''
          }`}
        >
          {formik.errors.subject}
          {/* </div> */}
        </div>
        {/* <div className='col-12 col-md-4 firstCol'> */}
        <label htmlFor='reply_to' />
        <input
          id='reply_to'
          type='email'
          name='reply_to'
          placeholder='Email Address'
          autoComplete='off'
          onChange={formik.handleChange}
          value={formik.values.reply_to}
          className='indivFields'
        />
        <div
          className={`expandable ${
            formik.touched.reply_to && formik.errors.reply_to ? 'show' : ''
          }`}
        >
          {formik.errors.reply_to}
          {/* </div> */}
        </div>{' '}
        {/* <div className='col-12 messageCol'> */}
        <label htmlFor='message' />
        <textarea
          id='message'
          name='message'
          placeholder='Message'
          autoComplete='off'
          onChange={formik.handleChange}
          value={formik.values.message}
          className='indivFields'
        />
        <div
          className={`expandable ${
            formik.touched.message && formik.errors.message ? 'show' : ''
          }`}
        >
          {formik.errors.message}
        </div>
        {/* </div> */}
        <div
          className='col-12'
          style={{ display: 'flex', justifyContent: 'space-around' }}
        >
          <button disabled={disabled} type='submit' className='sendBtn'>
            <span>{buttonState}</span>
          </button>
        </div>
        <div className='col-12 form-message'>
          <span
            id='output'
            className='output_message text-center text-uppercase'
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
