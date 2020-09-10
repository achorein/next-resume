import React, { Component } from 'react';

import NavBar from '../components/Layouts/NavbarOtherPage'
import Breadcrumbs from '../components/Layouts/Breadcrumbs'
import SectionListeCasClients from '../components/3-CasClients/SectionListeCasClients'
import DocumentMeta from 'react-document-meta';
import BackendService from '../services/Backend.service';

 

class CasClients extends Component {

    render() {
        const { casClients } = this.props;
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
                <DocumentMeta {...meta} />

                <NavBar />

                <Breadcrumbs titlePage="Cas Clients" />
                <SectionListeCasClients casClients={casClients} /> 
            </React.Fragment>
        );
    }
}

/**
* Récupération des informations nécessaires à la page
* https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
*/
export async function getStaticProps({params}) {
  const { data : casClients } = await BackendService.findAllCasClients();
  return {
    props: {
      casClients,
    }
  };
}

export default CasClients;