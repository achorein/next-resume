 import axios from 'axios';
import NavBar from '../../components/Layouts/NavbarOtherPage'
 
import { useRouter } from 'next/router'

 

import ModalVideo from 'react-modal-video'

 
import Breadcrumbs from '../../components/Layouts/Breadcrumbs'
 import DocumentMeta from 'react-document-meta';
 import Swal from 'sweetalert2';
 import Error from '../error';


 import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const openModal = () => {
    this.setState({isOpen: false})
}; 


function isOpen (){
    this.setState({isOpen: false})
}


const Prestations = ({ fiche }) => {

    console.log(fiche)
    const meta = {
        title: fiche.metadataSeoTitlePage,
        description: fiche.metadataSeoDescriptionPage,
        canonical: 'https://www.safiyoudine.fr/services/'+fiche.permaliens,
        meta: {
          charset: 'utf-8',
          name: {
            keywords: fiche.metadataSeoKeywords
          }
        }
      };
    

        return (
            <React.Fragment>
                <NavBar />
                <DocumentMeta {...meta}>
               </DocumentMeta>
                <Breadcrumbs titlePage= { fiche.titrePage} />

                <div className="about-text-area section-space--inner--80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center section-space--bottom--50">
                                   
                                {fiche.adresseLogo ?  <img src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/`+fiche.adresseLogo} className="img-fluid" alt="" style={{maxWidth : "250px" }}  /> :  <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />}
                                   
                                   

                                </div>
                                {/* section title */}
                                <div className="section-title-area text-center section-space--bottom--50">
                                    <h2 className="section-title "> { fiche.phraseAccroche}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of about text area  ====================*/}


                <div className="about-text-area grey-bg section-space--inner--80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="video-cta-content">
                                    <h4 className="video-cta-content__small-title">{  fiche.subtitleBlocPresentation} </h4>
                                    <h3 className="video-cta-content__title">{  fiche.titleBlocPresentation}</h3>
                                    <p className="video-cta-content__text-bl"> {ReactHtmlParser(fiche.descriptionBlocPresentation)}
                                     </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cta-video-image__image ">
                                    {fiche.adresseImagePresentation ?  <img src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/`+fiche.adresseImagePresentation} className="img-fluid" alt="" style={{maxWidth : "250px" }}  /> :  <img src={require(`../../images/svg/undraw_app_installation_mbdv.svg`)} className="img-fluid" alt="tbl" />}
                               
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br> <br></br> <br></br>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title-area text-center ">
                                    <a href="#" className="ht-btn ht-btn--round">NOUS CONTACTER</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of about text area  ====================*/}
               



            </React.Fragment>
    );
}

Prestations.getInitialProps = async ({ query: {id}, res }) => {
   console.log(id)
    const url = `https://ns3296606.ip-5-135-152.eu:8443/api/user/services/permaliens?permaliens=`+id ;
 //   const payload = { params: { id } }
    // const response = await axios.get(url);
 
    // Swal.fire(
    //     'Super!',
    //     'Votre message est envoyé' + response.status,
    //     'success'
    // )

    // if(response){
    //     console.log(response)
    //     return {
    //          fiche: response.data[0]
    //     }
    
    // }


    try {
        // fetch data from a url endpoint
        const response = await axios.get(url);
         return {
            fiche: response.data[0]
       }

      } catch (error) {
    //    alert(error); // catches both errors
     //   console.log("error", error);
        // appropriately handle the error
      //  window.location.href= "/error"
      //  return fiche ; 

    }

    // if (res) {
    //     res.statusCode = 404
    //     res.end('Not found')
    //     return
    //  }

    
}

export default Prestations;

 