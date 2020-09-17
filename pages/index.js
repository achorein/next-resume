import React, { PureComponent } from 'react';
import DocumentMeta from 'react-document-meta';
import NavBar from '../components/Layouts/NavbarTwo';
import HeroSliderThree from '../components/0-HomePage/HeroSliderThree';
import SectionReferencesTodayBloc from '../components/0-HomePage/SectionReferencesTodayBloc';
import SectionPrestationList from '../components/0-HomePage/SectionPrestationList';
import CookiesModalSimple from '../components/Layouts/CookiesModalSimple';
import BackendService from '../services/Backend.service';

class Index extends PureComponent {
  render() {
    const { casClients, servicesList } = this.props;
    const meta = {
      title: 'Safiyoudine',
      description: 'Safiyoudine',
      canonical: 'https://www.safiyoudine.fr/',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Safiyoudine',
        },
      },
    };

    return (
      <>
        <DocumentMeta {...meta} />

        <NavBar />

        <CookiesModalSimple />
        <HeroSliderThree />
        <SectionReferencesTodayBloc casClients={casClients} background="grey-bg" />
        <SectionPrestationList servicesList={servicesList} />
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
  const { data: servicesList } = await BackendService.findServicesAll();
  return {
    props: {
      casClients,
      servicesList,
    },
  };
}

export default Index;
