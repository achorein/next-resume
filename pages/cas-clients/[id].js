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


const CasClients = ({ casclient }) => {

    console.log(casclient)
    const meta = {
        title: casclient.metadataSeoTitlePage,
        description: casclient.metadataSeoDescriptionPage,
        canonical: 'https://www.safiyoudine.fr/cas-clients/'+casclient.permaliens,
        meta: {
          charset: 'utf-8',
          name: {
            keywords: casclient.metadataSeoKeywords
          }
        }
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
            <React.Fragment>
                <NavBar />
                <DocumentMeta {...meta}>
               </DocumentMeta>
                <Breadcrumbs titlePage="Cas Client "/>

                <div className="about-text-area section-space--inner--80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center section-space--bottom--50">
                                   
                                {casclient.adresseImageCasUtilisation ?  <img src={`https://ns3296606.ip-5-135-152.eu:8443/api/file/`+casclient.adresseImageCasUtilisation} className="img-fluid" alt="" style={{maxWidth : "250px" }}  /> :  <img src={require(`../../images/blog/1.jpg`)} className="img-fluid" alt="tbl" />}
                                   
                                   

                                </div>
                                {/* section title */}
                                <div className="section-title-area text-center section-space--bottom--50">
                                    <h2 className="section-title "> { casclient.titreCasUtilisation}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of about text area  ====================*/}


                <div className="about-text-area grey-bg section-space--inner--80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="video-cta-content">
                                <p className="video-cta-content__text-bl"> {ReactHtmlParser(casclient.descriptionCasUtilisation)}
                                     </p>
                                  
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

CasClients.getInitialProps = async ({ query: {id}, res }) => {
   console.log(id)
   //  id = "traitement-automatique-des-requ%C3%AAtes-clients" ;
   //  console.log(id)
    const url = `https://ns3296606.ip-5-135-152.eu:8443/api/user/cas-utilisation/permaliens?permaliens=`+id ;
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
        console.log(response)

         return {
            casclient: response.data[0]
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

export default CasClients;

 