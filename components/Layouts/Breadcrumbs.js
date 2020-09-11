import React, { PureComponent } from 'react';

class Breadcrumbs extends PureComponent {
  render() {
    return (
      <div
        className="breadcrumb-area breadcrumb-bg"
        style={{ backgroundImage: `url(${require('../../images/breadcrumbs.png')})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-banner text-center">
                <h1>
                  <b>{this.props.titlePage} </b>
                </h1>
                <ul className="page-breadcrumb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;
