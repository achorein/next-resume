import React, { PureComponent } from 'react';

import DocumentMeta from 'react-document-meta';
import NavBar from '../components/Layouts/NavbarOtherPage';
import Breadcrumbs from '../components/Layouts/Breadcrumbs';
import SectionListeCasClients from '../components/3-CasClients/SectionListeCasClients';
import BackendService from '../services/Backend.service';

class CasClients extends PureComponent {
  render() {
    const { casClients } = this.props;
    const meta = {
      title: 'Cas Clients- Safiyoudine',
      description: 'Safiyoudine.FR',
      canonical: 'https://www.safiyoudine.fr/cas-clients',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Safiyoudine.FR',
        },
      },
    };

    return (
      <>
        <DocumentMeta {...meta} />

        <NavBar />

        <Breadcrumbs titlePage="Cas Clients" />
        <SectionListeCasClients casClients={casClients} />
      </>
    );
  }
}

/**
 * Récupération des informations nécessaires à la page
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export async function getServerSideProps() {
  const { data: casClients } = await BackendService.findAllCasClients();
  return {
    props: {
      casClients,
    },
  };
}

export default CasClients;
