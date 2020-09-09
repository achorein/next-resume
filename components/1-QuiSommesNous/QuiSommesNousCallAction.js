import React, { Component } from 'react';
import ButtonStart from '../0-HomePage/buttonLeadsStart'
 class QuiSommesNousCallAction extends Component {
    render() {

     

        return (
            <div>
                {/*====================  feature icon area ====================*/}
                <div className="feature-icon-area blue-light-bg section-space--inner--90">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-icon-wrapper">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 col-12" >
                                        <div className="single-feature-icon text-center">
                                            <h1 className="single-feature-icon__title">Vous souhaitez évaluer votre projet ? </h1>
                                            <ButtonStart buttonStyle="ht-btn ht-btn--round" buttonTitle="COMMENCER L’EVALUATION" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12" >
                                        <div className="single-feature-icon text-center">
                                            <h1 className="single-feature-icon__title">Vous souhaitez devenir partenaire ? </h1>
                                    
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12" >
                                        <div className="single-feature-icon text-center">
                                            <h1 className="single-feature-icon__title">Vous souhaitez simplement nous contacter ?  </h1>
                                            <a href="/contact" className="ht-btn ht-btn--round">NOUS CONTACTER</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        </div>
                    </div>
                </div>
                {/*====================  End of feature icon area  ====================*/}
                <div className="feature-icon-area section-space--inner--special-2"></div>
            </div>
        )
    }
}

export default QuiSommesNousCallAction;
