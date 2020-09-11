import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
// import '../assets/css/flaticon.css';
// import '../assets/css/fontawesome.min.css';
// import '../assets/css/style.css';
// import '../assets/css/responsive.css';
import '../assets/scss/style.scss';

import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
    };
  }

  // Preloader
  state = {
    loading: true,
  };

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000);
  }

  componentWillUnmount() {
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {/* <DefaultSeo
                    title="Safiyoudine"
                    description="Safiyoudine"
                    openGraph={{
                        type: 'website',
                        locale: 'fr_FR',
                        url: 'https://www.safiyoudine.fr/',
                        site_name: 'Safiyoudine',
                    }}
                /> */}

        <Component {...pageProps} />

        {/* Preloader */}
        {/* <Loader loading={this.state.loading} /> */}

        {/* Go Top Button */}
        {/* <GoTop scrollStepInPx="50" delayInMs="10.50" /> */}
      </>
    );
  }
}
