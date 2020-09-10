import React, { Component } from 'react';
 import NavBar from '../components/Layouts/NavbarTwo'
import HeroSliderThree from '../components/0-HomePage/HeroSliderThree'
import SectionReferencesTodayBloc from '../components/0-HomePage/SectionReferencesTodayBloc'
import SectionPrestationList from '../components/0-HomePage/SectionPrestationList'; 
 import CookiesModalSimple from '../components/Layouts/CookiesModalSimple'
import DocumentMeta from 'react-document-meta';
import BackendService from '../services/Backend.service';

class Index extends Component {
    render() {
        const { casClients, servicesList } = this.props;
        const meta = {
            title: 'Safiyoudine',
            description: 'Safiyoudine',
            canonical: 'https://www.safiyoudine.fr/',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Safiyoudine'
              }
            }
          };


        return (
          <React.Fragment>
             <DocumentMeta {...meta} />
       
              <NavBar />

              <CookiesModalSimple />
              <HeroSliderThree />
              <SectionReferencesTodayBloc casClients={casClients} background="grey-bg" />
              <SectionPrestationList servicesList={servicesList} />
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
  const { data : servicesList } = await BackendService.findServicesAll();
  return {
    props: {
      casClients,
      servicesList,
    }
  };
}

export default Index;