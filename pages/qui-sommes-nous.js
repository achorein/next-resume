import React, { Component } from 'react';

import Breadcrumbs from '../components/Layouts/Breadcrumbs'
import QuiSommesNousContent from '../components/1-QuiSommesNous/QuiSommesNousContent'
import QuiSommesNousCallAction from '../components/1-QuiSommesNous/QuiSommesNousCallAction'
 
import DocumentMeta from 'react-document-meta';
import NavbarOtherPage from '../components/Layouts/NavbarOtherPage';


class Quisommesnous extends Component {

    render() {

      const meta = {
        title: 'Devenez partenaire avec Safiyoudine.fr',
        description: ' Devenir partenaire safiyoudine',
        canonical: 'https://www.safiyoudine.fr/pourquoi-devenir-editeur-partenaire',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'seo, dev, design, mobile'
          }
        }
      };


        return (
            <React.Fragment>

<DocumentMeta {...meta}>
       </DocumentMeta>
                
                <NavbarOtherPage />
                <Breadcrumbs titlePage="Qui sommes-nous ?" />
                <QuiSommesNousContent /> 
                <QuiSommesNousCallAction />
                 

            </React.Fragment>
        );
    }
}

export default Quisommesnous;