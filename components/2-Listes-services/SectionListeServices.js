import React, { Component } from 'react';
import Link from 'next/link';
import BackendService from '../../services/Backend.service';

class SectionListeServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      servicesList: [],
      errorMessage: '',
      infoMessage: '',
    };
  }

  render() {
    const { servicesList } = this.props;
    const { infoMessage, errorMessage } = this.state;

    const Fichelist = (servicesList || []).map((fiche, i) => {
      return (
        <div className="col-lg-4 col-sm-6 col-12 section-space--bottom--30" key={i}>
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <Link href={`/prestations/${fiche.permaliens}`}>
                  <a>
                    {fiche.adresseLogo ? (
                      <img
                        src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/${fiche.adresseLogo}`}
                        className="img-fluid"
                        alt=""
                        style={{ maxWidth: '250px' }}
                      />
                    ) : (
                      <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />
                    )}
                  </a>
                </Link>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <Link href={`/prestations/${fiche.permaliens}`}>
                  <a>
                    {fiche.titrePage} - {fiche.nomEntreprise}
                  </a>
                </Link>
              </h3>
              <p>{fiche.phraseAccroche}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className="page-wrapper section-space--inner--120">
          {/* Projects section start */}
          <div className="project-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="project-item-wrapper">
                    <div className="row">{Fichelist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Projects section end */}
        </div>
      </>
    );
  }
}

export default SectionListeServices;
