import React, { PureComponent } from 'react';

import DocumentMeta from 'react-document-meta';
import NavBar from '../components/Layouts/NavbarOtherPage';
import Breadcrumbs from '../components/Layouts/Breadcrumbs';
import SectionListeServices from '../components/2-Listes-services/SectionListeServices';
import BackendService from '../services/Backend.service';

class ServicesPages extends PureComponent {
  render() {
    const { servicesList } = this.props;
    const meta = {
      title: 'Safiyoudine.FR',
      description: 'Safiyoudine.FR',
      canonical: 'https://www.safiyoudine.fr/qui-sommes-nous',
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

        <Breadcrumbs titlePage="Liste des services" />
        <SectionListeServices servicesList={servicesList} />
      </>
    );
  }
}

/**
 * Récupération des informations nécessaires à la page
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps({ params }) {
  const { data: servicesList } = await BackendService.findServicesAll();
  return {
    props: {
      servicesList,
    },
  };
}

export default ServicesPages;
