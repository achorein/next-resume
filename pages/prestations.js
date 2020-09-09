import React, { Component } from 'react';

import NavBar from '../components/Layouts/NavbarOtherPage'
import Breadcrumbs from '../components/Layouts/Breadcrumbs'
import SectionListeServices from '../components/2-Listes-services/SectionListeServices'
import DocumentMeta from 'react-document-meta';

 

class ServicesPages extends Component {

    render() {
        const meta = {
            title: 'Safiyoudine.FR',
            description: 'Safiyoudine.FR',
            canonical: 'https://www.safiyoudine.fr/qui-sommes-nous',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Safiyoudine.FR'
              }
            }
          };


        return (
            <React.Fragment>
                  <DocumentMeta {...meta}>
       </DocumentMeta>
                
                <NavBar />

                <Breadcrumbs titlePage="Liste des services" />
                <SectionListeServices /> 
                  

            </React.Fragment>
        );
    }
}

export default ServicesPages;