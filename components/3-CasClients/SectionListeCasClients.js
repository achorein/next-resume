import React, { Component } from 'react';
import BackendService from '../../services/Backend.service';
import Router from 'next/router';

class SectionCasClients extends Component {

    constructor(props) {
        super(props);

        this.state = {
            casClients: [],
            errorMessage: '',
            infoMessage: '',
        };
    }

    componentDidMount() {
        BackendService.findAllCasClients().
            then(casClients => {
                this.setState({ casClients: casClients.data });
            });
    }

    detail(product) {
 
      window.location.href = "/cas-clients/" + product.permaliens
    }

 
    render() {
        const { casClients, infoMessage, errorMessage } = this.state;

        let Fichelist = casClients.map((casClient, i) => {
            return (
                <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
                    <div className="service-grid-item service-grid-item--style2">
                        <div className="service-grid-item__image">
                            <div className="service-grid-item__image-wrapper">
                                <a onClick={() => this.detail(casClient)}>
                                     {casClient.adresseImageCasUtilisation ? <img src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/` + casClient.adresseImageCasUtilisation} className="img-fluid" alt="" style={{ maxWidth: "250px" }} /> : <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />}
                                </a>
                            </div>
                        </div>
                        <div className="service-grid-item__content">
                            <h3 className="title">
                                <a onClick={() => this.detail(casClient)}>{casClient.titreCasUtilisation}</a>
                            </h3>
                            <p>{casClient.subtitleCasUtilisation}</p>
                        </div>
                    </div>
                </div>
            )
        });


        return (

            <>
                <div className="page-wrapper section-space--inner--120">
                    {/*Projects section start*/}
                    <div className="project-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-item-wrapper">
                                        <div className="row">
                                            {Fichelist}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/*Projects section end*/}
                </div>
            </>
        )
    }
}


export default SectionCasClients;