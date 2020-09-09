import React, {Component} from 'react';
import NavBar from '../components/Layouts/NavbarTwo';
 
class Error extends Component{
    render(){
        return(
            <div>
                {/* Navigation bar */}
                <NavBar/>

                {/*====================  404 page content ====================*/}
                <div>
                    <div className="error-page-wrapper d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6 col-md-9 m-auto text-center">
                            <div className="error-content-centered d-flex align-items-center justfy-content-center">
                            <div className="error-page-content-wrap">
                                <h2>404</h2>
                                <h3>PAGE INTROUVABLE</h3>
                                <p>Désolé mais la page que vous recherchez n'existe pas, a été supprimée, le nom a changé ou est temporairement indisponible.</p>
                                <a href="/" className="ht-btn ht-btn--default ht-btn--default--dark-hover">Retour à la page d'accueil</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/*====================  End of 404 page content  ====================*/}

                {/* Footer */}
 
            </div>
        )
    }
}


export default Error;