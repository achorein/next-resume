import React, { Component } from 'react';
 import NavBar from '../components/Layouts/NavbarTwo'
import HeroSliderThree from '../components/0-HomePage/HeroSliderThree'
import SectionOneMissionIAtodayBloc from '../components/0-HomePage/SectionOneMissionIAtodayBloc'
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
                 <SectionOneMissionIAtodayBloc  background="grey-bg" />
                <SectionPrestationList />
        

            </React.Fragment>
        );
    }
}

export default Index;