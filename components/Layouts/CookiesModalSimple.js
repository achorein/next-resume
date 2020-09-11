import React, { PureComponent } from 'react';
import CookieConsent from 'react-cookie-consent';

class CookiesModalSimple extends PureComponent {
  render() {
    return (
      <CookieConsent
        buttonText="Accepter"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#001b68', zIndex: 1000 }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        acceptOnScroll
        onAccept={({ acceptedByScrolling }) => {
          // if (acceptedByScrolling) {
          //     // triggered if user scrolls past threshold
          //     alert("Accept was triggered by user scrolling");
          // } else {
          //     alert("Accept was triggered by clicking the Accept button");
          // }
        }}
        expires={150}
      >
        En visitant ce site, vous acceptez l'utilisation de cookies afin de vous proposer des services et des offres
        adaptés à vos préférences{' '}
        <span style={{ fontSize: '10px' }}>
          En continuant à parcourir ce site, vous acceptez l’utilisation des cookies.
        </span>
      </CookieConsent>
    );
  }
}

export default CookiesModalSimple;
