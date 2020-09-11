import React, { PureComponent } from 'react';

class QuiSommesNousPage extends PureComponent {
  render() {
    const meta = {
      title: 'Safiyoudine.FR',
      description: 'Safiyoudine.FR',
      canonical: 'https://www.safiyoudine.fr/qui-sommes-nous',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Safiyoudine.FR',
        },
      },
    };

    return (
      <div>
        {/*= ===================  about text area ==================== */}
        <div className="about-text-area section-space--inner--50">
          <div className="container">
            <div className="row align-items-center">
              <h4 className="video-cta-content__small-title">NOTRE OBJECTIF</h4>
              <h1 className="video-cta-content__title">Qui sommes nous ? </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuiSommesNousPage;
