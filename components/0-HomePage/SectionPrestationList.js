import React, { Component } from 'react';
import Link from 'next/link'
import BackendService from '../../services/Backend.service';

class SectionPrestationList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            servicesList: [],
            errorMessage: '',
            infoMessage: '',
            
 
        };
    }
  componentDidMount() {
 

        this.setState({
            products: { loading: true }
        });

   }

    render() {
        const { servicesList } = this.props;
        const { infoMessage, errorMessage } = this.state;
 

        let Fichelist = servicesList.map((fiche, i)=> {
            return(
                <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>

<a  onClick={() => this.detail(fiche)}>
            
            {fiche.adresseLogo ?  <img src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/`+fiche.adresseLogo} className="img-fluid" alt="" style={{maxWidth : "200px" }}  /> :  <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />}
            
                
                                </a>
                                <div className="service-grid-item__content">
                            <h3 className="title">
                                <Link href={`/prestations/${fiche.permaliens}`}><a>{fiche.titrePage} - {fiche.nomEntreprise}</a></Link>
                            </h3>
                            <p>{fiche.phraseAccroche}</p>
                        </div>
                </div>
            )
        });



        return (
            <div>

 
                <div className="page-wrapper section-space--inner--special">
                
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center">
                                    <h1 className="section-title section-space--bottom--50">Les services</h1>
                                </div>
                            </div>
                                <div className="col-lg-12">
                                    <div className="project-item-wrapper">
                                        <div className="row">
                                            {Fichelist}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>  <br></br>
                            <br></br>  
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center">
                                    <Link href='/prestations' className="ht-btn ht-btn--round2"><a>VOIR LES SERVICES</a></Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
              
                </div>

                
        )
    }
}


export default SectionPrestationList;