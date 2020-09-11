import axios from 'axios';
import PropTypes from 'prop-types';
import DocumentMeta from 'react-document-meta';
import ReactHtmlParser from 'react-html-parser';

import NavBar from '../../components/Layouts/NavbarOtherPage';
import Breadcrumbs from '../../components/Layouts/Breadcrumbs';

import BackendService from '../../services/Backend.service';

const CasClients = ({ casclient }) => {
  const meta = {
    title: casclient.metadataSeoTitlePage,
    description: casclient.metadataSeoDescriptionPage,
    canonical: `https://www.safiyoudine.fr/cas-clients/${casclient.permaliens}`,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: casclient.metadataSeoKeywords,
      },
    },
  };

  // this.titreCasUtilisation= titreCasUtilisation;
  // this.subtitleCasUtilisation= subtitleCasUtilisation;
  // this.descriptionCasUtilisation = descriptionCasUtilisation;
  // this.adresseImageCasUtilisation = adresseImageCasUtilisation;
  //   this.id = id ;
  //   this.permaliens = permaliens;
  //   this.vedette = vedette;
  //   this.etatFiche = etatFiche;
  return (
    <>
      <NavBar />
      <DocumentMeta {...meta} />
      <Breadcrumbs titlePage="Cas Client " />

      <div className="about-text-area section-space--inner--80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-title-area text-center section-space--bottom--50">
                {casclient.adresseImageCasUtilisation ? (
                  <img
                    src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/${casclient.adresseImageCasUtilisation}`}
                    className="img-fluid"
                    alt=""
                    style={{ maxWidth: '250px' }}
                  />
                ) : (
                  <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />
                )}
              </div>
              {/* section title */}
              <div className="section-title-area text-center section-space--bottom--50">
                <h2 className="section-title "> {casclient.titreCasUtilisation}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*= ===================  End of about text area  ==================== */}

      <div className="about-text-area grey-bg section-space--inner--80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="video-cta-content">
                <p className="video-cta-content__text-bl"> {ReactHtmlParser(casclient.descriptionCasUtilisation)}</p>
              </div>
            </div>
          </div>
        </div>
        <br /> <br /> <br />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              {/* section title */}
              <div className="section-title-area text-center ">
                <a href="#" className="ht-btn ht-btn--round">
                  NOUS CONTACTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*= ===================  End of about text area  ==================== */}
    </>
  );
};

CasClients.propTypes = {
  casclient: PropTypes.shape({
    permaliens: PropTypes.string.isRequired,
    metadataSeoTitlePage: PropTypes.string.isRequired,
    metadataSeoDescriptionPage: PropTypes.string.isRequired,
    metadataSeoKeywords: PropTypes.string.isRequired,
    adresseImageCasUtilisation: PropTypes.string.isRequired,
    titreCasUtilisation: PropTypes.string.isRequired,
    descriptionCasUtilisation: PropTypes.string.isRequired,
  }).isRequired,
};

/**
 * Récupération de la liste des routes dynamique (id de chaque route)
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation
 */
export async function getStaticPaths() {
  const { data: casclients } = await BackendService.findAllCasClients();
  return {
    paths: casclients.map((casclient) => ({
      params: { id: casclient.permaliens },
    })),
    fallback: false, // false: page 404, true: gestion d'un comportement spécifique (https://nextjs.org/docs/basic-features/data-fetching#fallback-pages)
  };
}

/**
 * Récupération des informations pour un id spécifique
 * https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
 */
export async function getStaticProps({ params }) {
  const url = `https://ns3296606.ip-5-135-152.eu:8443/api/user/cas-utilisation/permaliens?permaliens=${params.id}`;
  const { data: casclients } = await axios.get(url);
  return {
    props: {
      casclient: casclients[0],
    },
  };
}

export default CasClients;
