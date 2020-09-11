import React, { Component } from 'react';
import Link from 'next/link';
import BackendService from '../../services/Backend.service';

class SectionReferencesTodayBloc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      casClients: [],
      errorMessage: '',
      infoMessage: '',

      //   currentUser: new User(),
    };
  }

  componentDidMount() {
    // UserService.currentUser.subscribe(data => {
    //     this.setState({
    //         currentUser: data
    //     })
    // });

    this.setState({
      products: { loading: true },
    });

    BackendService.findAllCasClientsVedette().then((casClients) => {
      this.setState({ casClients: casClients.data });
    });
  }

  render() {
    const { casClients } = this.props;
    const { infoMessage, errorMessage } = this.state;

    const Datalist = casClients.map((casClient, i) => {
      return (
        <div className="col-lg-4 col-md-6 col-12" key={i}>
          <div className="single-feature-icon">
            <div className="single-feature-icon__image">
              {casClient.adresseImageCasUtilisation ? (
                <img
                  src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/${casClient.adresseImageCasUtilisation}`}
                  className="img-fluid radios"
                  alt="tbl"
                  style={{ maxWidth: '100px' }}
                />
              ) : (
                <img src={require(`../../images/blog/1.jpg`)} className="img-fluid radios" alt="tbl" />
              )}
            </div>
            <h2 className="single-feature-icon__title">{casClient.titreCasUtilisation}</h2>
            <p className="single-feature-icon__content">{casClient.subtitleCasUtilisation}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*= ===================  feature icon area ==================== */}
        <div className="feature-icon-area blue-light-bg section-space--inner--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* section title */}
                <div className="section-title-area text-center section-space--bottom--50">
                  <h1 className="section-title">Ils m'ont fait confiance !</h1>
                </div>
              </div>

              <div className="col-lg-12 specia-padding">
                <div className="feature-icon-wrapper">
                  <div className="row">{Datalist}</div>

                  <div className="row ">
                    <Link href="/cas-clients">
                      <a className="ht-btn ht-btn--round">LES CAS CLIENTS</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*= ===================  End of feature icon area  ==================== */}
      </div>
    );
  }
}

export default SectionReferencesTodayBloc;
