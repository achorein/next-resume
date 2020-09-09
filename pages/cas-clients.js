import React, { Component } from 'react';

import NavBar from '../components/Layouts/NavbarOtherPage'
import Breadcrumbs from '../components/Layouts/Breadcrumbs'
import SectionListeCasClients from '../components/3-CasClients/SectionListeCasClients'
import DocumentMeta from 'react-document-meta';

 

class CasClients extends Component {

    render() {
        const meta = {
            title: 'Cas Clients- Safiyoudine',
            description: 'Safiyoudine.FR',
            canonical: 'https://www.safiyoudine.fr/cas-clients',
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

                <Breadcrumbs titlePage="Cas Clients" />
                <SectionListeCasClients /> 
                  

            </React.Fragment>
        );
    }
}

export default CasClients;