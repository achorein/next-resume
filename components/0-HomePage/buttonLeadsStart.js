import React, { Component } from 'react';

import Swal from 'sweetalert2';
import fetch from 'isomorphic-fetch';

import Backend from '../../services/Backend.service';

// cf. https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css
import './buttonLeadsStart.module.css';

class buttonLeadsStart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      free: false,
      errorMessage: '',
      infoMessage: '',
    };
  }

  openModal() {
    Swal.mixin({
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: 'Suivant',
      cancelButtonText: 'Annuler',
      progressSteps: ['1', '2', '3', '4', '5'],
    })
      .queue([
        {
          title: 'Est-ce que vous êtes : ',
          html:
            '<label class="containerRadio">Une association <input id="question_un_stepOne_" name="question_un_stepOne_" type="radio" value="Une association"><span class="checkmarkCUSTOMradio"></span></label>' +
            '<label class="containerRadio">Une entreprise  <input id="question_un_stepOne_" name="question_un_stepOne_" type="radio" value="Une entreprise "><span class="checkmarkCUSTOMradio"></span></label>' +
            '<label class="containerRadio">Une startup <input id="question_un_stepOne_" name="question_un_stepOne_" type="radio" value="Une startup"><span class="checkmarkCUSTOMradio"></span></label>' +
            '<label class="containerRadio">Un projet humanitaire<input id="question_un_stepOne_" name="question_un_stepOne_" type="radio" value="Un projet humanitaire"><span class="checkmarkCUSTOMradio"></span></label>',
          focusConfirm: false,
          preConfirm: () => {
            return [
              {
                question_un_stepOne_: document.getElementById('question_un_stepOne_').value,
              },
            ];
          },
        },
        {
          title: 'Votre activité s’adresse :',
          html:
            '<label class="containerRadio">Aux particuliers <input id="question_un_stepTwo_" name="question_un_stepTwo_" type="radio" value="Aux particuliers"><span class="checkmarkCUSTOMradio"></span></label>' +
            '<label class="containerRadio">Aux entreprises <input id="question_un_stepTwo_" name="question_un_stepTwo_" type="radio" value="Aux entreprises"><span class="checkmarkCUSTOMradio"></span></label>' +
            '<label class="containerRadio">Aux deux <input id="question_un_stepTwo_" name="question_un_stepTwo_" type="radio" value="Aux deux"><span class="checkmarkCUSTOMradio"></span></label>',
          focusConfirm: false,
          preConfirm: () => {
            return [
              {
                question_un_stepTwo_: document.getElementById('question_un_stepTwo_').value,
              },
            ];
          },
        },
        {
          title: 'Dans quel domaine êtes vous :',
          html:
            '<label class="containerCheckedForm">La Comptabilité <input id="question_checkbox1_stepThird_" name="question_checkbox1_stepThird_" type="checkbox" value="Comptabilité"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">Les Administrations <input id="question_checkbox2_stepThird_" name="question_checkbox2_stepThird_" type="checkbox" value="Administrations"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">Les Ressources Humaines <input id="question_checkbox3_stepThird_" name="question_checkbox3_stepThird_" type="checkbox" value="Ressources humaines"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">Commerciale <input id="question_checkbox4_stepThird_" name="question_checkbox4_stepThird_" type="checkbox" value="Commerciale"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">Le Support Clients <input id="question_checkbox5_stepThird_" name="question_checkbox5_stepThird_" type="checkbox" value="Support Clients"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<textarea id="question_textArea_stepThird_" row="3" placeholder="Autres, précisez" class="swal2-input"></textarea>',

          focusConfirm: false,
          preConfirm: () => {
            return [
              {
                question_checkbox1_stepThird_: document.getElementById('question_checkbox1_stepThird_').checked,
                question_checkbox2_stepThird_: document.getElementById('question_checkbox2_stepThird_').checked,
                question_checkbox3_stepThird_: document.getElementById('question_checkbox3_stepThird_').checked,
                question_checkbox4_stepThird_: document.getElementById('question_checkbox4_stepThird_').checked,
                question_checkbox5_stepThird_: document.getElementById('question_checkbox5_stepThird_').checked,
                question_textArea_stepThird_: document.getElementById('question_textArea_stepThird_').value,
              },
            ];
          },
        },
        {
          title: 'Avez vous besoin ? :',
          html:
            '<label class="containerCheckedForm">un site internet <input id="question_checkbox1_stepFour_" name="question_checkbox1_stepFour_" type="checkbox" value="un site internet"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">une boutique en ligne<input id="question_checkbox2_stepFour_" name="question_checkbox2_stepFour_" type="checkbox" value="Analyse automatique"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">une application web ou mobile <input id="question_checkbox3_stepFour_" name="question_checkbox3_stepFour_" type="checkbox" value="Gestion de processus / projets"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<label class="containerCheckedForm">un blog <input id="question_checkbox4_stepFour_" name="question_checkbox4_stepFour_" type="checkbox" value="un blog"><span class="checkmarkCUSTOMcheckbox"></span></label>' +
            '<textarea id="question_textArea_stepFour_" row="3" placeholder="Autres, précisez" class="swal2-input"></textarea>',
          focusConfirm: false,

          preConfirm: () => {
            return [
              {
                question_checkbox1_stepFour_: document.getElementById('question_checkbox1_stepFour_').checked,
                question_checkbox2_stepFour_: document.getElementById('question_checkbox2_stepFour_').checked,
                question_checkbox3_stepFour_: document.getElementById('question_checkbox3_stepFour_').checked,
                question_checkbox4_stepFour_: document.getElementById('question_checkbox4_stepFour_').checked,
                question_textArea_stepFour_: document.getElementById('question_textArea_stepFour_').value,
              },
            ];
          },
        },
        {
          title: 'Merci de remplir le formulaire ci-dessous',
          width: 1200,

          html:
            '<input id="fullname" name="fullname" placeholder="Nom et Prénom" class="swal2-input">' +
            '<input id="company" name="company" placeholder="Nom d’entreprise" class="swal2-input">' +
            '<input id="email" type="email" name="email" placeholder="E-mail" class="swal2-input">' +
            '<input id="telephone"  name="telephone" placeholder="Téléphone" class="swal2-input">' +
            '<input id="company_job" name="company_job" placeholder="Fonction dans l’entreprise" class="swal2-input">',
          focusConfirm: false,
          //     return fetch(`//api.github.com/users/${login}`)
          //     .then(response => {
          //       if (!response.ok) {
          //         throw new Error(response.statusText)
          //       }
          //       return response.json()
          //     })
          //     .catch(error => {
          //       Swal.showValidationMessage(
          //         `Request failed: ${error}`
          //       )
          //     })
          // },

          preConfirm: () => {
            let erreurEmail = false;

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(document.getElementById('email').value)) {
              erreurEmail = true;
              Swal.showValidationMessage('E-mail Invalide : Le format attendu exemple@domain.fr');
            }
            console.log('erreurEmail');
            console.log(erreurEmail);
            if (erreurEmail === false) {
              console.log('je rentre dans la premier condition');

              const email = document.getElementById('email').value;

              let objectEmail = { email: document.getElementById('email').value, free: false };

              fetch(`https://ns3296606.ip-5-135-152.eu:8443/api/user/prospect/email?email=${objectEmail.email}`).then(
                (response) => {
                  console.log("je rentre dans l'appel ws ");

                  console.log(response);

                  if (response.status === 200) {
                    console.log('la quete est passé');
                    //  this.setState({ free : true });
                    // = { email : document.getElementById('email').value, free : false};
                    console.log(objectEmail.free);
                    //   this.setState({ free: true });
                    //           Swal.showValidationMessage("on affiche")
                    localStorage.setItem('checkEmail', false);

                    //             throw new Error("E-mail Invalide : Vous êtes déjà inscrits")
                  }

                  if (response.status === 406) {
                    console.log('rrrr');
                    localStorage.setItem('checkEmail', true);
                    objectEmail = { email: document.getElementById('email').value, free: true };
                    console.log(objectEmail.free);
                    //   this.setState({ free: true });
                    //           Swal.showValidationMessage("on affiche")

                    //     throw new Error("E-mail Invalide : Vous êtes déjà inscrits")
                  }
                  return response.json();
                },
              );
              // .catch(error => {
              //           Swal.showValidationMessage(`Request failed: ${error}` )

              // })

              console.log(objectEmail);

              // const restp = Backend.checkEmailProspect(email);
              // console.log(restp);

              // if(localStorage.getItem('checkEmail') === true){
              //     Swal.showValidationMessage("E-mail Invalide : Vous êtes déjà inscrits ")
              // }
            }

            if (!document.getElementById('fullname').value) {
              Swal.showValidationMessage("Le champ 'Nom et prénom' est un champ obligatoire");
            }

            return [
              {
                fullname: document.getElementById('fullname').value,
                company: document.getElementById('company').value,
                email: document.getElementById('email').value,
                company_job: document.getElementById('company_job').value,
                telephone: document.getElementById('telephone').value,
              },
            ];
          },
        },
      ])
      .then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value, null, 2);

          // console.log("==========answers");

          // console.log(answers);
          // console.log("==========result.value");
          // console.log(result.value);

          // Swal.fire({
          //     title: 'Super!',
          //     icon: 'success',
          //     showConfirmButton: false,
          //     //    timer: 3500,
          //     //     timerProgressBar: true,

          //     html: `
          //   Your answers:
          //   <pre><code>${answers}</code></pre>
          // `,
          //     confirmButtonText: 'Lovely!'
          // })

          const prospect = {
            question_un_stepOne_: result.value[0][0].question_un_stepOne_,

            question_un_stepTwo_: result.value[1][0].question_un_stepTwo_,

            question_checkbox1_stepThird_: result.value[2][0].question_checkbox1_stepThird_,
            question_checkbox2_stepThird_: result.value[2][0].question_checkbox2_stepThird_,
            question_checkbox3_stepThird_: result.value[2][0].question_checkbox3_stepThird_,
            question_checkbox4_stepThird_: result.value[2][0].question_checkbox4_stepThird_,
            question_checkbox5_stepThird_: result.value[2][0].question_checkbox5_stepThird_,
            question_textArea_stepThird_: result.value[2][0].question_textArea_stepThird_,

            question_checkbox1_stepFour_: result.value[3][0].question_checkbox1_stepFour_,
            question_checkbox2_stepFour_: result.value[3][0].question_checkbox2_stepFour_,
            question_checkbox3_stepFour_: result.value[3][0].question_checkbox3_stepFour_,
            question_checkbox4_stepFour_: result.value[3][0].question_checkbox4_stepFour_,
            question_textArea_stepFour_: result.value[3][0].question_textArea_stepFour_,

            fullname: result.value[4][0].fullname,
            company: result.value[4][0].company,
            email: result.value[4][0].email,
            company_job: result.value[4][0].company_job,
            telephone: result.value[4][0].telephone,
          };

          //    console.log(prospect);

          Backend.prospect(prospect).then(
            (data) => {
              Swal.fire({
                icon: 'success',
                title: 'Merci !',
                text: 'Vous serez bientôt contacter par notre équipe. Je vous remercie pour votre confiance.',
              });
            },
            (error) => {
              Swal.fire({
                icon: 'error',
                title: 'Erreur ! ',
                text: 'Il y a erreur',
              });
            },
          );

          localStorage.removeItem('checkEmail');
        }
      });
  }

  render() {
    const { email, free } = this.state;
    return (
      <a href="#/" className={`${this.props.buttonStyle}`} onClick={this.openModal}>
        {this.props.buttonTitle}
      </a>
    );
  }
}

export default buttonLeadsStart;
