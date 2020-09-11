import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Backend from '../../services/Backend.service';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      loading: false,
      errorMessage: '',
    };
  }

  render() {
    return (
      <Formik
        initialValues={{
          nom: '',
          prenom: '',
          phome: '',
          email: '',
          message: '',
        }}
        validationSchema={Yup.object().shape({
          prenom: Yup.string().required('Ce champ est obligatoire'),
          email: Yup.string()
            .email('Format autorisé : example@example.fr')
            .required('Une adresse e-mail est obligatoire'),
          message: Yup.string().required('Ce champ est obligatoire'),
        })}
        onSubmit={(fields, { resetForm }) => {
          const message = JSON.stringify(fields, null, 4);
          // console.log(fields);
          // Swal.fire(
          //     'Super!',
          //     'Votre message est envoyé',
          //     'success'
          // )
          Backend.sendMessage(message).then(
            (data) => {
              Swal.fire('Super !', 'Votre message est envoyé', 'success');
              resetForm({});
            },

            (error) => {
              console.log(error);

              const mm = JSON.stringify(error, null, 4);

              alert('probleme');
            },
          );
        }}
      >
        {({ errors, status, resetForm, touched }) => (
          <Form>
            <h3>Envoyer un message</h3>

            <form id="contact-form">
              <div className="row row-10">
                <div className="col-md-6 col-12 section-space--bottom--20">
                  <Field name="nom" type="text" placeholder="Nom" className="form-contact" />
                </div>
                <div className="col-md-6 col-12 section-space--bottom--20">
                  <Field name="email" type="text" placeholder="Adresse e-mail " className="form-contact" />
                  <div className="email_error" />
                  <ErrorMessage name="email" component="div" className="email_error" />
                </div>
                <div className="col-md-6 col-12 section-space--bottom--20">
                  <Field name="prenom" type="text" placeholder="Prénom " className="form-contact" />
                  <div className="prenom_error" />

                  <ErrorMessage name="prenom" component="div" className="prenom_error" />
                </div>
                <div className="col-md-6 col-12 section-space--bottom--20">
                  <Field name="phome" type="text" placeholder="Numéro de téléphone" className="form-contact" />
                </div>
                <div className="col-12">
                  <Field
                    name="message"
                    component="textarea"
                    placeholder="Votre message"
                    rows="2"
                    className="form-control"
                  />
                  <div className="message_error" />
                  <ErrorMessage name="message" component="div" className="message_error" />
                </div>
                <div className="col-12">
                  <button>ENVOYER</button>
                </div>
              </div>
            </form>
          </Form>
        )}
      </Formik>
    );
  }
}

export default ContactForm;
