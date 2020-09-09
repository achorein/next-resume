const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const withVideos = require('next-videos');
const fetch = require('isomorphic-unfetch');

const nextJsConfig = {
    exportTrailingSlash: true,
    exportPathMap: async function() {


        const paths = {
            '/': { page: '/' },
            '/qui-sommes-nous' : { page : '/qui-sommes-nous'},
            '/cas-clients' : { page : '/cas-clients'},
            '/prestations' : { page : '/prestations'},
 
            '/error': { page: '/error' }
        }; 
        // const res = await fetch('https://ns3296606.ip-5-135-152.eu:8443/api/user/services/all');
        // const data = await res.json();
        // const fiches = data.map(entry => entry.show);
    //    console.log(data)
        // fiches.forEach(fiche => {
        //   paths[`/prestations/${fiche.permalien}`] = { page: '/prestations/[id]', query: { id: fiche.permalien } };
        // });
        return paths;
            
    }
}

module.exports = withPlugins([
    [optimizedImages, {
        inlineImageLimit: 8192,
        imagesFolder: 'images',
        imagesName: '[name]-[hash].[ext]',
        handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif', 'ico', 'mp4'],
        optimizeImages: true,
        optimizeImagesInDev: false,
        mozjpeg: {
            quality: 80,
        },
        optipng: {
            optimizationLevel: 3,
        },
        pngquant: false,
        gifsicle: {
            interlaced: true,
            optimizationLevel: 3,
        },
        webp: {
            preset: 'default',
            quality: 75,
        },
    }],
    [withCSS],[withFonts],[withSass],[withVideos], nextJsConfig
]);