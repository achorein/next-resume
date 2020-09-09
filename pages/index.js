import React, { Component } from 'react';
 import NavBar from '../components/Layouts/NavbarTwo'
import HeroSliderThree from '../components/0-HomePage/HeroSliderThree'
import SectionReferencesTodayBloc from '../components/0-HomePage/SectionReferencesTodayBloc'
import SectionPrestationList from '../components/0-HomePage/SectionPrestationList'; 
 import CookiesModalSimple from '../components/Layouts/CookiesModalSimple'
import DocumentMeta from 'react-document-meta';

class Index extends Component {
    render() {

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
             <DocumentMeta {...meta}>
               </DocumentMeta>
       
               <NavBar />


                <CookiesModalSimple />
                 <HeroSliderThree />
                 <SectionReferencesTodayBloc  background="grey-bg" />
                <SectionPrestationList />
        

            </React.Fragment>
        );
    }
}

export default Index;